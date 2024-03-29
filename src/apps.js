let now = new Date();

function pad(value) {
  if (value <10) {
    return "0" + value; 
      }
      else {return value;}
}

let minutes= pad(now.getMinutes());
let hours = pad(now.getHours());
let year = now.getFullYear();
let date = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let month = months[now.getMonth()];

let displayDate = document.querySelector("#display-time");
displayDate.innerHTML = `${day}, ${date} ${month} ${year} ${hours}:${minutes}`;

// Weather API 

function displayForecast(response) {
  console.log(response.data.daily);
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Saturday", "Sunday", "Monday", "Tuesday"];

  days.forEach(function(day) {forecastHTML = forecastHTML + `
   
  <div class="col-3">
    <div class="day">${day}</div>
      <img class ="temp-pic" src="http://openweathermap.org/img/wn/01n@2x.png">
    <div class="temp-max">
        <span class="max-temp">18°C</span> 
        <span class="min-temp">12°C</span>

</div>
</div>


`;
    
  })

forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML; 

} 

function getForecast(coordinates) {
  console.log(coordinates)
  let apiKey = "9acc1ba10c354b22cdd73fddfa649e54";
  let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`
axios.get(apiUrl).then(displayForecast)
console.log(apiUrl);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#display-temp");
  let cityElement = document.querySelector("#city");
  let weatherCondition = document.querySelector("#display-cond");
  let iconElement = document.querySelector("#icon");
  let windSpeedElement = document.querySelector("#wind-speed");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp); 
  cityElement.innerHTML = response.data.name; 
  weatherCondition.innerHTML = response.data.weather[0].description;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed); 
  humidityElement.innerHTML = response.data.main.humidity;
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].icon);

  getForecast(response.data.coord);
}

function handleSubmit(event) {
  event.preventDefault();
  let formElement = document.querySelector("#input");
search(formElement.value); 
  }

  function search (city) {
let apiKey = "9acc1ba10c354b22cdd73fddfa649e54"
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayTemperature)
  }

  search("Melbourne");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);