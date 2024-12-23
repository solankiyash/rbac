const express = require("express");
const mongoose = require("mongoose");
const Db = require("./DB/dbconnection.js");
const userRouter = require("./Routes/userRouter.js");
const cors = require("cors")

const app = express();

app.use(express.json());
// database connection
Db(); 

app.use(cors())
app.use("/api", userRouter); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
