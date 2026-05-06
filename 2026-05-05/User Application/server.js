const express = require('express');
const path = require('path');
const userRouter = require("./Routes/userRoutes");
const authRouter = require('./Routes/authRoutes');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`);
})