const mongoose = require("mongoose");
// we require validator for validate fields
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email ID")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    name:{
        type:String,
        required:true,
        minLength:3
    },
    message:{
        type:String,
        required:true,
        minLength:10
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// we need a collection
const User = mongoose.model("User",userSchema);

module.exports= User;
