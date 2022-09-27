var apiKey = '94a9647511f2a0ae40696b90c19eac3c';
var city;
var todaysURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var searchBtn = document.querySelector('.submit-search');
var search = document.querySelector('.search-bar');
var weatherLocation = document.querySelector('#weather-location');
var iconn = document.querySelector('#icon');
var tempp = document.querySelector('#temp');
var humidityy = document.querySelector('#humidity');
var windd = document.querySelector('#wind');
var todaysWeather = document.querySelector('.todays-weather');
var dateDisplay = moment().format("MMM Do YY");
var searchHistory = [];

function saveCity(searchInput) {
    searchHistory.push(searchInput)
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
}

function showHistory() {
    JSON.parse(localStorage.getItem('searchHistory', searchHistory));
}

function getWeather(city) {
    fetch(todaysURL + city + '&units=imperial&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            document.querySelector('#date').innerHTML = dateDisplay;
            weatherLocation.innerHTML = data.name;
            iconn.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            tempp.innerHTML = 'Temp: ' + data.main.temp + "°F";
            humidityy.innerHTML = 'Humidity: ' + data.main.humidity + "%";
            windd.innerHTML = 'Wind: ' + data.wind.speed + " m/h";

            var lon = data.coord.lon;
            var lat = data.coord.lat;
            var fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?&lat='
            fetch(fiveDayURL + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    document.querySelector('#date-one').innerHTML = data.list[0].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png';
                    console.log(data)
                    document.querySelector('#temp-one').innerHTML = 'Temp:' + data.list[0].main.temp + '°F';
                    document.querySelector('#wind-one').innerHTML = 'Wind: ' + data.list[0].wind.speed + ' m/h';
                    document.querySelector('#humidity-one').innerHTML = 'Humidity: ' + data.list[0].main.humidity + '%';

                    document.querySelector('#date-two').innerHTML = data.list[8].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[1].weather[1].icon + '@2x.png';
                    document.querySelector('#temp-two').innerHTML = 'Temp: ' + data.list[8].main.temp + '°F';
                    document.querySelector('#wind-two').innerHTML = 'Wind: ' + data.list[8].wind.speed + ' m/h';
                    document.querySelector('#humidity-two').innerHTML = 'Humidity: ' + data.list[8].main.humidity + '%';

                    document.querySelector('#date-three').innerHTML = data.list[16].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[2].weather[2].icon + '@2x.png';
                    document.querySelector('#temp-three').innerHTML = 'Temp: ' + data.list[16].main.temp + '°F';
                    document.querySelector('#wind-three').innerHTML = 'Wind: ' + data.list[16].wind.speed + ' m/h';
                    document.querySelector('#humidity-three').innerHTML = 'Humidity: ' + data.list[16].main.humidity + '%';

                    document.querySelector('#date-four').innerHTML = data.list[24].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[3].weather[3].icon + '@2x.png';
                    document.querySelector('#temp-four').innerHTML = 'Temp: ' + data.list[24].main.temp + '°F';
                    document.querySelector('#wind-four').innerHTML = 'Wind: ' + data.list[24].wind.speed + ' m/h';
                    document.querySelector('#humidity-four').innerHTML = 'Humidity: ' + data.list[24].main.humidity + '%';

                    document.querySelector('#date-five').innerHTML = data.list[32].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[4].weather[4].icon + '@2x.png';
                    document.querySelector('#temp-five').innerHTML = 'Temp: ' + data.list[32].main.temp + '°F';
                    document.querySelector('#wind-five').innerHTML = 'Wind: ' + data.list[32].wind.speed + ' m/h';
                    document.querySelector('#humidity-five').innerHTML = 'Humidity: ' + data.list[32].main.humidity + '%';
                })
        })
}

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    city = search.value;
    getWeather(city);
    saveCity();
})
showHistory()