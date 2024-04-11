const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// GET login page
// GET /

const getLogin = (req, res) => {
    res.render("home");
}

// Login user
// POST /
const loginUser = asyncHandler((req, res) => {
    const {username, password}  = req.body;

    if (username === "admin" && password === "1234"){
        res.send("Login success");
    }
    else{
        res. send("Login Failed");
    }
})

const getRegister = (req, res) => {
    res.render("register")
}

// Register User
// POST / register

const registerUser = asyncHandler(async(req, res) => {
    const {username, password, password2} = req.body;
    if (password === password2){
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username, password:hashedPassword});
        res.json({message: "Register successfuly", user});
    }
    else{
        res.json({message: "Register failed"});
    }
})

module.exports = {getLogin, loginUser, getRegister, registerUser};