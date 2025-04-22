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
