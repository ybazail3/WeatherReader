
var apiKey = '94a9647511f2a0ae40696b90c19eac3c';
var city = 'seattle';
var todaysURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var searchBtn = document.querySelector('.submit-search');
var search = document.querySelector('.search-bar');
var weatherLocation = document.querySelector('#weather-location');
var iconn = document.querySelector('#icon');
var tempp = document.querySelector('#temp');
var humidityy = document.querySelector('#humidity');
var windd = document.querySelector('#wind')

var searchHistory = [];

/*function showHistory() {
    search.empty();
    for (i=0; i < city.length; i++) {
        var historyButton = document.createElement('button');
        document.body.appendChild(historyButton)
    }
    JSON.parse(localStorage.getItem(search));
}*/

function getWeather() {
    fetch(todaysURL + city + '&units=imperial&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        })
    /*if (!searchHistory.includes(data.name)) {
        searchHistory.push(data.name)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
        showHistory();
    }*/

    .then(function (data) {
        //console.log(data);
        weatherLocation.innerHTML = data.name;
        iconn.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
        tempp.innerHTML = 'Temp: ' + data.main.temp + "°F";
        humidityy.innerHTML = 'Humidity: ' + data.main.humidity + "%";
        windd.innerHTML = 'Wind: ' + data.wind.speed + " m/h";
    })
}
getWeather();

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    city = search.value;
    getWeather();
    getForecast();
})
//trying to get the days
//document.querySelector('#date').text(data.name + '(' + moment(data.dt, 'X').format('L') + ')');

var fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q='
function getForecast() {
    fetch(fiveDayURL + city + '&units=imperial&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('#date-one').innerHTML = data.dt;
            iconn.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            document.querySelector('#temp-one').innerHTML = 'Temp:' + data.main.temp + '°F';
            document.querySelector('#wind-one').innerHtml = 'Wind: ' + data.wind.speed + ' m/h';
            document.querySelector('#humidity-one').innerHTML = 'Humidity: ' + data.main.humidity + '%';
        })
        .then(function (data) {
            document.querySelector('#date-two').innerHTML = data.dt;
            iconn.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            document.querySelector('#temp-two').innerHTML = 'Temp: ' + data.main.temp + '°F';
            document.querySelector('#wind-two').innerHtml = 'Wind: ' + data.wind.speed + ' m/h';
            document.querySelector('#humidity-two').innerHTML = 'Humidity: ' + data.main.humidity + '%';
        })
        .then(function (data) {
            document.querySelector('#date-three').innerHTML = data.dt;
            iconn.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            document.querySelector('#temp-three').innerHTML = 'Temp: ' + data.main.temp + '°F';
            document.querySelector('#wind-three').innerHtml = 'Wind: ' + data.wind.speed + ' m/h';
            document.querySelector('#humidity-three').innerHTML = 'Humidity: ' + data.main.humidity + '%';
        })
        .then(function (data) {
            document.querySelector('#date-four').innerHTML = data.dt;
            iconn.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            document.querySelector('#temp-four').innerHTML = 'Temp: ' + data.main.temp + '°F';
            document.querySelector('#wind-four').innerHtml = 'Wind: ' + data.wind.speed + ' m/h';
            document.querySelector('#humidity-four').innerHTML = 'Humidity: ' + data.main.humidity + '%';
        })
        .then(function (data) {
            document.querySelector('#date-five').innerHTML = data.dt;
            iconn.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            document.querySelector('#temp-five').innerHTML = 'Temp: ' + data.main.temp + '°F';
            document.querySelector('#wind-five').innerHtml = 'Wind: ' + data.wind.speed + ' m/h';
            document.querySelector('#humidity-five').innerHTML = 'Humidity: ' + data.main.humidity + '%';
        })
}
getForecast();





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