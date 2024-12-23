const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const connectDB = async() => {
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected")
} catch (error) {
    console.error("Error connecting to db:",error.message)
    process.exit(1);
}
}

module.exports = connectDB;
