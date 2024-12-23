const User = require("../models/User.js") 
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

const singupuser = async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body;

    // Validate input fields
    if (!firstname || !lastname || !email || !password || !role) {
        return res.status(400).send("All fields are required");
    }

    try {
        const existingUser = await User.findOne({ email });
        console.log(existingUser, "sdas");

        if (existingUser) {
            return res.status(400).send("Email already registered!!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword, // Correct key
            role,
        });

        await user.save();

        sendverificationEmail(email);
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).send("Server error");
    }
};



 const singinuser = async (req,res) => {
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).send("User not found")
        }
        if(user.role === "user"){
            return res.status(403).send("You are not allowed to login from here")
        }
        const validPassowrd = await bcrypt.compare(password,user.password);

        if(!validPassowrd){
            return res.status(400).send("Invalid password")
        }

        const token = jwt.sign({id:user.id,role:user.role},process.env.SECRATEKEY,{expiresIn:"5h"})
        res.json({token})
    } catch (error) {
        res.status(500).send("Server error")   
    }
} 

const sendverificationEmail = (email) => {
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from:process.env.EMAIL_USER,
        to:email,
        subject:"Email varification",
        text:"verify email through click link"
    };

    transport.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log(error)
        }else{
            console.log("Email send" + info.response)
        }
    })
}


module.exports = {singinuser,singupuser}