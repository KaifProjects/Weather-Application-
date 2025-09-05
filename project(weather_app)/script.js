const API_KEY = `your api key here`;
const inputText = document.querySelector("#inputText");
const search = document.querySelector("#search");
const errordiv = document.querySelector("#errordiv");
const weatherInfo = document.querySelector("#weatherInfo");
const cityName = document.querySelector("#cityName");
const condition = document.querySelector("#condition");
const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windSpeed");
const humidity = document.querySelector("#humidity");

// Adding event listner to search button 
search.addEventListener("click",fetchWeather);

// fetchWeather function
async function fetchWeather() {
    const city = inputText.value.trim() // trim removes extra spaces 
if(!city){
    displayerror("Enter the city name");
    return;
}
const url = `add your API's URL here`

try{
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("City not found")
    }
    const data = await response.json()  // converting json to js object 
    displayWeather(data);
}

catch(error){
    displayerror("Incorrect city name ")
}

}

// writing function to display error :

function displayerror(message){
errordiv.textContent = message;
errordiv.style.display = "block"; // show error message 
weatherInfo.classList.add("hidden");
}

// writing function to display weather 
function displayWeather(data){
    errordiv.style.display = "none"; // hide error message 
    weatherInfo.classList.remove("hidden");
    cityName.textContent = data.name

    const weatherCondition = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    condition.innerHTML = `<i class="fa-solid fa-cloud"></i> ${weatherCondition}`;
    temperature.textContent = data.main.temp;
    windSpeed.textContent = data.wind.speed;
    humidity.textContent = data.main.humidity;

}

