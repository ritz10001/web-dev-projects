const Task = require("../models/Task");
const { default: mongoose } = require("mongoose");

const idValidator = async (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400);
        throw new Error("Invalid ID type!");
    }
    
    const task = await Task.findById({_id: req.params.id});
    
    if(!task){
        res.status(404);
        throw new Error("Task not found!");
    }

    req.task = task;
    next();
}

module.exports = idValidator;
