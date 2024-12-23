const mongoose  = require("mongoose")


const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"admin",
        required:true
    },  
    verified:{
        type:Boolean,
        default:false
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("User",UserSchema)