const apiKey = "2e66737c5f60114810f23b3932acd4b8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".inputBox");

//indicating button is the first in search
const inputBtn = document.getElementsByTagName("button")[0];

let selectImage = document.querySelector(".sel_img");
let invalid = document.querySelector(".invalid");

searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

//receives the city from user input
async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 400 || response.status == 404) {
      invalid.style.display = "block";
      document.querySelector(".hide").style.display = "none";
    } else {
      //jsonify the response to see the result as data
      const data = await response.json();
      invalid.style.display = "none";
      document.querySelector(".hide").style.display = "block";

      // console.log(data);

      //setting the parameters dynamically through api
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".city_data").innerHTML = data.main.temp;
      document.querySelector(".humidity_data").innerHTML = data.main.humidity;
      document.querySelector(".wind_data").innerHTML = data.wind.speed;

      //condition to check if the weather is cloudy,sunny,rainny,mist or snow to set the images as required
      if (data.weather[0].main == "Clouds") {
        selectImage.src = "images/clouds.png";
      }
      if (data.weather[0].main == "Clear") {
        selectImage.src = "images/clear.png";
      }
      if (data.weather[0].main == "Rain") {
        selectImage.src = "images/rain.png";
      }
      if (data.weather[0].main == "Mist") {
        selectImage.src = "images/Mist.png";
      }
      if (data.weather[0].main == "Drizzle") {
        selectImage.src = "images/drizzle.png";
      }
      if (data.weather[0].main == "Snow") {
        selectImage.src = "images/snow.png";
      }
    }
  } catch (error) {
    console.log(error);
  }
}

//onclick of search button the input box receives the
//value which will be used to set the city name and is passed as parameter to checkWeather
inputBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
