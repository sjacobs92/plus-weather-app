/* Use current date */
let currentDate = new Date();
let h4 = document.querySelector("h4");

let date = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let year = currentDate.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];

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
  "December",
];
let month = months[currentDate.getMonth()];

h4.innerHTML = `${day}, ${month} ${date}, ${year}`;

/* weather */
function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#weather-description").innerHTML = response.data.weather[0].main;
  document.querySelector("#wind-speed").innerHTML = `<em>Wind Speed: ${Math.round(response.data.wind.speed)} mph</em>`;
  
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  console.log(response);
}

/* show search location */
function citySearch(city) {
  let apiKey = "9303cf9f693da1c04c1d92345e2c9362";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search-input").value;
  citySearch(city);
}

let searchForm = document.querySelector("#city-search");
searchForm.addEventListener("submit", handleSubmit);

citySearch("Denver");




