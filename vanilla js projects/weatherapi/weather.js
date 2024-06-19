

const weatherform = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityInput");
const city = document.querySelector(".city");
const weatherInfo = document.querySelectorAll("p");
const apiKey = "1ZJnjzP88wvcYj801w7F0rrFJv16Yin4";
const submitButton = document.getElementById("submitbutton");

const weatherArray = ["☀️", "❄️", "🌧️", "☁️", "⛈️", "⛅"];

submitButton.addEventListener("click", event => {
    if(cityInput.value === ""){
        window.alert("Please enter a city!");
    }
    else{
        console.log(`https://api.tomorrow.io/v4/weather/forecast?location=${cityInput.value}&apikey=${apiKey}`);
        console.log(typeof cityInput.value);
        getWeatherData(cityInput.value);
    }
})

async function getWeatherData(city){
    try{
        const data = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => window.alert(error));
    }
    catch(error){
        window.alert(error);
    }
}
