function currentDate(timestamp) {
  let date = new Date(timestamp);
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let date = document.querySelector("#date");
date.innerHTML = currentDate();
function showCurTemp(response) {
  console.log(response.data);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#sky").innerHTML =
    response.data.weather[0].description;
  // celsuisTemp = response.data.main.temp;
}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert(`Type a city`);
  }
  let city = document.querySelector("#city-name").value;
  let apiKey = "bc57b8de35a416749405960dbd82036f";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurTemp);
}
function changeToFahr(event) {
  event.preventDefault();
  let tempElem = document.querySelector("#temperature");
  let temperature = tempElem.innerHTML;
  temperature = Number(temperature);
  tempElem.innerHTML = Math.round(temperature + 9) / 5 + 32;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);

// function showCels(event) {
//   event.preventDefault();
//   let tempElem2 = document.querySelector("#temperature");
//   let temperature2 = response.data.main.temp;
//   temperature2 = Number(temperature);
//   tempElem2.innerHTML = Math.round(temperature);
// }
let fahrTemp = document.querySelector("#fahrlink");
fahrTemp.addEventListener("click", changeToFahr);
// let celsTemp = document.querySelector("#celsius");
// celsTemp.addEventListener("click", showCels);
