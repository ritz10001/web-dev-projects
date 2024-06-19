const display = document.getElementById("display");

function addToDisplay(content){
    display.value += content;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR!"
    }
    
}