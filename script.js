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
        //reference for the icon code: https://openweathermap.org/weather-conditions
        let iconUrl = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png'; //create the URL for the icon
        weatherIcon.src = iconUrl; //set the src of the image to the icon URL 
        //Reference for the data: https://openweathermap.org/current#current_JSON
        cityOutput.innerHTML = data.name; //display the city name
        //set the margin top of the city name
        desc.innerHTML = data.weather[0].description; //display the weather description
        temp.innerHTML = data.main.temp + ' °C'; //display the temperature in Celsius
        wind.innerHTML = data.wind.speed + ' m/s'; //display the wind speed in m/s
      //if description are certain words, change the color of the text
        if (desc.innerHTML.includes('clear')) {
          outerContainer.style.backgroundColor = '#FFCC00'; //set the color to yellow
          weatherImage.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163660.png'; //set the image to sunny
        } else if (desc.innerHTML.includes('clouds')) {
          outerContainer.style.backgroundColor = '#A0A0A0'; //set the color to gray
          weatherImage.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163660.png'; //set the image to cloudy
        } else if (desc.innerHTML.includes('rain')|| desc.innerHTML.includes("moderate rain") || desc.innerHTML.includes('drizzle') || desc.innerHTML.includes('mist')) {
          outerContainer.style.backgroundColor = '#00BFFF'; //set the color to blue
        } else if (desc.innerHTML.includes('snow')) {
          outerContainer.style.backgroundColor = '#FFFFFF'; //set the color to white
        } else if (desc.innerHTML.includes('thunderstorm')) {
          container.style.backgroundColor= '#FF0000'; //set the color to red
        }
      })
      .catch(error => console.error('Error:', error)); //log any errors to the console
      //style the city name
        cityOutput.style.fontSize = '3em'; //set the font size of the city name
        cityOutput.style.fontWeight = 'bold'; //set the font weight of the city name
        cityOutput.style.color = '#333'; //set the color of the city name
}

//add an event listener to the button
//when the button is clicked, call the getWeather function
//this will trigger the function to fetch the weather data
inputBtn.addEventListener('click', getWeather); //add event listener to the button

//add an event listener to the input field
//when the user presses Enter, call the getWeather function
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { //check if the key pressed is Enter
        getWeather(); //call the getWeather function
    }
}); //add event listener to the input field

