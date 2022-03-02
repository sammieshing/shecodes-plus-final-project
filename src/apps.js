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



