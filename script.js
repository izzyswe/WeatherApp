//Grab all the elements from the HTML

//the input of user
let input = document.querySelector('#cityInput')
let inputBtn = document.querySelector('#citySearchBtn')

//the output of user input
const weatherIcon = document.querySelector('#icon')
let cityOutput = document.querySelector('#City')
let desc = document.querySelector('#Desc')
let temp = document.querySelector('#Temp')
let wind = document.querySelector('#Wind')
let weatherImage = document.querySelector('#weatherImage')

//container for the output
//this is the container where the output will be displayed
let outerContainer = document.querySelector('.outerContainer')
let container = document.querySelector('.container')
let display = document.querySelector('.display')

//this is in reference to the lesson from NYTimes API
const API_Key = '3622b517995f3bad35120956cbecbbb3'; //API key for OpenWeatherMap
const API_Bridge = 'https://api.openweathermap.org/data/2.5/weather?q='; //API URL for OpenWeatherMap
const API_Unit = '&units=metric'; //API unit for temperature in Celsius
const API_Lang = '&lang=en'; //API language for the response
//API language for the response

//function to get the weather data
//this function will be called when the user clicks the button
//this function will fetch the data from the API and display it on the page
function getWeather() {
    let city = input.value; //get the value of the input field
    let API_Complete_Url = API_Bridge + city + API_Unit + API_Lang + '&appid=' + API_Key; //complete URL for the API request

    fetch(API_Complete_Url) //fetch the data from the API
      .then(response => response.json()) //convert the response to JSON
      .then(data => {
        console.log(data); //log the data to the console for debugging
        //Get the icon from the API response
        //Reference: https://openweathermap.org/weather-conditions
        let iconCode = data.weather[0].icon; //get the icon code from the API response  
      
        //Reference: https://openweathermap.org/weather-condition
        cityOutput.innerHTML = data.name; //display the city name
        //set the margin top of the city name
        desc.innerHTML = data.weather[0].description; //display the weather description
        temp.innerHTML = data.main.temp + ' °C'; //display the temperature in Celsius
        wind.innerHTML = data.wind.speed + ' m/s'; //display the wind speed in m/s
      })
    //style the city name
            cityOutput.style.fontSize = '3em'; //set the font size of the city name
            cityOutput.style.fontWeight = 'bold'; //set the font weight of the city name
            cityOutput.style.color = '#333'; //set the color of the city name
            //cityOutput.style.textAlign = 'center'; //set the text alignment of the city name
            //container.style.marginTop = '80px';
}

