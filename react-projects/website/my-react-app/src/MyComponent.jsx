import React, { useState } from "react"

function MyComponent(){
    
    const [places, setPlaces] = useState(["Dallas", "Houston", "Austin", "Lubbock", "Amarillo"]);
    const unorderedList = places.map((place, index) => <li key={index} onClick={() => removePlace(index)}>{place}</li>)

    function addPlace(){
        const newPlace = document.getElementById("placeInput").value;
        document.getElementById("placeInput").value = "";
        setPlaces(p => [...p, newPlace]);
    }

    function removePlace(index){
        setPlaces(places.filter((_, idx) => idx !== index));
    }
    
    return( 
        <div className="main-container">
            <div className="sub-container">
                <h1 style={{fontWeight: "bold"}}>List of food</h1>
                <ul>{unorderedList}</ul>
            </div>
            <br></br>
            <label>Enter Place: </label>
            <input id="placeInput" type="text"></input>
            <button onClick={addPlace}>Add Place</button>
            
        </div>
    );

}

export default MyComponent