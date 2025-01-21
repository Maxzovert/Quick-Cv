const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONECTION_STRING);
        console.log("Data base connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
};

module.exports = connectdb