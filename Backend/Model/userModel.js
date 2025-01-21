const mongoose = require("mongoose");

const userSchmema = mongoose.Schema({
    username : {
        type : String,
        require : [true , "Please enter Username"],
    },
    email:{
        type : String,
        require : [true , "Please enter Email"],
        unique : [true , "Email already exists"]
    },
    password:{
        type : String,
        require : [true , "Please enter Password"],
    },
    
},{
    timestamp : true,
})

module.exports = mongoose.model("User", userSchmema);