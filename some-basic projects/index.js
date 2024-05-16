let ser = document.querySelector("#submit");
let pic = document.querySelector(".pictureinfo");
let infor = document.querySelector("#search");
let temp = document.querySelector("#valuetemp");
let cityName = document.querySelector(".city");
let humidity = document.querySelector("#humidity");
let windspeedvalue = document.querySelector("#windspeedvalue");
let infopic = document.querySelector("#shrey");
let master = document.querySelector(".master");
let err = document.querySelector(".err");
master.style.display = "none";
async function info() {
  let cityname = infor.value;
  let apikey = "61b7c44ba288c6a88143c01a1244f1c0";
  let temperaturunits = "metric";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=${temperaturunits}`;
  let values = await fetch(apiurl);
  let finalvalues = await values.json();

  if (finalvalues.cod == 404) {
    err.style.display = "block";
    master.style.display = "none";
    return;
  } else {
    err.style.display = "none";
    master.style.display = "block";
  }
  //acessing value in json
  let weatherstatus = finalvalues.weather[0].main;
  let tempinc = finalvalues.main.temp;
  let humidityvalue = finalvalues.main.humidity;
  let windspeed = finalvalues.wind.speed;
  console.log(windspeed);
  //temp change
  temp.innerHTML = tempinc;
  //city change
  cityName.innerHTML = cityname;
  //humidity change
  humidity.innerHTML = humidityvalue;
  //windspeed change
  windspeedvalue.innerHTML = windspeed;

  //image change
  if (weatherstatus == "Clear") {
    infopic.src = "./images/clear.png";
  } else if (weatherstatus == "Clouds") {
    infopic.src = "./images/clouds.png";
  } else if (weatherstatus == "Rain") {
    infopic.src = "./images/rain.png";
  } else if (weatherstatus == "Snow") {
    infopic.src = "./images/snow.png";
  } else if (weatherstatus == "Thunderstorm") {
    infopic.src = "./images/thunderstorm.png";
  } else if (weatherstatus == "Mist") {
    infopic.src = "./images/mist.png";
  } else if (weatherstatus == "Haze") {
    infopic.src = "./images/haze.png";
  } else if (weatherstatus == "Dust") {
    infopic.src = "./images/dust.png";
  } else if (weatherstatus == "Fog") {
    infopic.src = "./images/fog.png";
  } else if (weatherstatus == "Smoke") {
    infopic.src = "./images/smoke.png";
  } else {
    infopic.src = "./images/clouds.png";
  }
}
ser.addEventListener("click", info);
window.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    info();
  }
});
