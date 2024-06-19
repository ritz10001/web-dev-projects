import { useState, useEffect } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    console.log("render");
    useEffect(() => {
        console.log("OnMount");
    }, [] )

    function addNewTask(){
        const taskContent = document.getElementById("content").value;
        document.getElementById("content").value = "";

        if(taskContent.length !== 0){
            setTasks(t => [...t, newTask]);
        }

    }

    function handleTaskChange(event){
        setNewTask(event.target.value);
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, idx) => idx !== index))
    }

    function swapUpTask(index){
        const updatedTasks = [...tasks];
        if(index !== 0){
            [updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
        else{
            [updatedTasks[0], updatedTasks[tasks.length-1]] = [updatedTasks[tasks.length-1], updatedTasks[0]];
            setTasks(updatedTasks);
        }

    }

    function swapDownTask(index){
        const updatedTasks = [...tasks];
        if(index !== tasks.length - 1){
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        else{
            [updatedTasks[index], updatedTasks[0]] = [updatedTasks[0], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div className="main-container">
            <h1>To-Do-List</h1>
            <div className="sub-container">
                <input id="content" type="text" placeholder="Enter a task..." onChange={handleTaskChange}></input>
                <button onClick={addNewTask}>Add</button>
      
            </div>
                <ul>
                    {tasks.map((task, index) => 
                        <div className="list-container">
                            <li style = {{color: "black"}} key = {index}>{task}</li>
                            <button id="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                            <button id="swap-up-btn" onClick={() => swapUpTask(index)}>👆</button>
                            <button id="swap-down-btn" onClick={() => swapDownTask(index)}>👇</button>
                        </div>)}
                </ul>
            
        </div>
    )
}

export default ToDoList