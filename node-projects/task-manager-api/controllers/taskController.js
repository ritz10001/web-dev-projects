const asyncHandler = require("express-async-handler");
const express = require("express");
const Task = require("../models/Task");
const { default: mongoose } = require("mongoose");


const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({user: req.user.id});
    res.status(200).json(tasks);
});

const getTaskByID = asyncHandler(async (req, res) => {
    res.status(200).json(req.task);
});

const createTask = asyncHandler(async (req, res) => {
    const {title, description, completed, date} = req.body;
    console.log(title, description, completed);
    if(!title || !description || (completed === undefined)){
        res.status(400);
        throw new Error("All fields must be filled!");
    }

    const task = await Task.create({
        user: req.user.id,
        title,
        description,
        completed
    });
    
    res.status(201).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedTask);
});

const deleteTask = asyncHandler(async (req, res) => {
    await Task.deleteOne({_id: req.params.id});
    res.status(200).json(req.task);
});


module.exports = {getTasks, getTaskByID, createTask, updateTask, deleteTask};

