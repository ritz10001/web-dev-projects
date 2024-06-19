const asyncHandler = require("express-async-handler");
const express = require("express");
const User = require("../models/User");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
    console.log("registering");
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("All fields must be filled!");
    }

    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400);
        console.log("user alreadu");
        throw new Error("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });
    
    if(newUser){
        res.status(201).json({_id: newUser.id, name: newUser.name, email: newUser.email});
    }
    else{
        res.status(400);
        throw new Error("User data is not valid");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields must be filled");
    }

    const user = await User.findOne({email});
    if(!user){
        res.status(400);
        throw new Error("User does not exist");
    }

    const validatePass = await bcrypt.compare(password, user.password);
    if(validatePass){
        const accessToken = jwt.sign({
             user: {
                    name: user.name, 
                    email: user.email,
                    id: user.id
                }
        }, process.env.ACCESS_SECRET_KEY, {expiresIn: "10m"});
        res.status(200).json({accessToken});
    }
    else{
        res.status(400);
        throw new Error(`Incorrect Password entered for User ${user.name}`);
    }

});

const currentUser = asyncHandler(async(req, res) => {
    res.json(req.user);
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById({_id: req.params.id});
    if(!user){
       res.status(404);
       throw new Error("User does not exist!");
    }
    await User.deleteOne({_id: req.params.id});
    res.status(200).json({message: "User deleted"});
})

module.exports = {registerUser, loginUser, currentUser, deleteUser};