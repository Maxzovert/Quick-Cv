const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//SignUp
const userSignUp = async (req,res)=>{

    console.log(req.body)
    const {username , email,password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
        return;
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User Already exists");
        return;
    }

    const hashedPass = await bcrypt.hash(password , 10);

    const user = await User.create({
        username,
        email,
        password : hashedPass,
    })
    if(user){
        res.status(201).json({
            _id : user.id,
            email: user.email,
        })
    }else{
        res.status(400); 
        throw new Error("Userdata is not valid")
    }
    
};

//Login 
const loginUser = async(req, res) => {
    const {email , password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
        return;
    }

    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password , user.password))){
        const accessToken = jwt.sign({
            uset: {
                username : user.username,
                email : user.email,
                id : user.id
            }
        },
        process.env.TOKEN_KEY,
        {expiresIn : "15m"}
    );
        res.status(200).json({accessToken});
        return;
    }else{
        res.status(401);
        throw new Error("Invalid Credential"); 
    }

    res.json({message :"Login SUcks"});
};


const currentUser = async(req, res) => {
    res.json({message :"Current User haji"});
    return;
}

module.exports = {userSignUp , loginUser , currentUser};