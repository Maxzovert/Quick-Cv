const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup
const userSignUp = async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;  // Make sure "username" matches frontend

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPass,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
        });
    } else {
        res.status(400).json({ message: "User data is not valid" });
    }
};

// Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: { // Fixed typo from "uset" to "user"
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.TOKEN_KEY,
            { expiresIn: "2m" }
        );
        return res.status(200).json({ accessToken });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
};

// Current User (For authentication checking)
const currentUser = async (req, res) => {
    return res.json({ message: "Current User data" });
};

module.exports = { userSignUp, loginUser, currentUser };
