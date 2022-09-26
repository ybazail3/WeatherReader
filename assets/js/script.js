
var apiKey = '94a9647511f2a0ae40696b90c19eac3c';
var city = 'seattle';
var todaysURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
var search = document.querySelector('.search-bar');
var searchBtn = document.querySelector('.submit-search');
var location = document.querySelector('#weather-location');
var icon = document.querySelector('#icon');
var temp = document.querySelector('#temp');
var humidity = document.querySelector('#humidity');
var wind = document.querySelector('#wind')

function getWeather() {
    fetch(todaysURL)
     .then(function (response) {
            return response.json();
        })
        /*.then(function (data) {
            console.log(data);
            data.location.innerText = data.name;
            data.icon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            data.temp.innerText = temp + "°F";
            data.humidity.innerText = humidity + "%";
            data.wind.innerText = speed + " m/h";
        })*/
} 


    /*searchBtn.addEventListener('click', function(event){
        city = search.value;
        getWeather();
    })*/

/*var fiveDayURL = 'api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey
var lat;
var lon;
function getForecast() {
    fetch(fiveDayURL)
        .then(function (response) {
            return response.JSON();
        })
        .then(function (data) {
            console.log(data);
        })
}*/

























/*var dayForecast = {
    apiKey: '94a9647511f2a0ae40696b90c19eac3c',
    getWeather: function (city) {
        fetch(queryURL)
        .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
        })
            .then((data) => this.displayWeather(data))
    },
    displayForecast: function (data) {
        var { name } = data;
        var { icon } = data.weather[0];
        var { temp } = data.main;
        var { speed } = data.wind;
        var { humidity } = data.pressure;
        console.log(name, icon, description, temp, humidity, speed, uvi);
        document.querySelector('#weather-location').innerText = name;
        document.querySelector('#icon').src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('#temp').innerText = temp + "°F";
        document.querySelector('#humidity').innerText =
            humidity + "%";
        document.querySelector('#wind').innerText =
            speed + " m/h";
    },
    search: function () {
        this.getWeather(document.querySelector('.search-bar').value);
    },
};
document.querySelector('.submit-search').addEventListener("click", function () {
    weather.search();
});*/





/*var fiveDayForecast =  'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&appid=' + apiKey;
fetch(fiveDayForecast)
.then(function (response) {
   return response.json();
})
   .then(function (data) {
       console.log(data);
   });*/

