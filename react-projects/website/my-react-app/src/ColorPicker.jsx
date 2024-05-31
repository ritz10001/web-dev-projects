import React, {useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function changeColor(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h2 style={{fontWeight: "bold"}}>Color Picker</h2>
            <div className="color-show" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" onChange = {changeColor}></input>
        </div>
    );
}

export default ColorPicker

