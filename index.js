const express = require("express");
const passport = require("passport");
const cors = require('cors');
const errorMiddleware = require("./middleware/errors")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");




dotenv.config();

require('./config/passport')



const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

app.use(passport.initialize());

//user Routes
const userRoute = require("./Routes/userRoutes");

app.use("/api",userRoute);





app.get("/greeting",(req,res)=>{
    res.send("Hello world");
})

app.use(errorMiddleware);
module.exports = app;