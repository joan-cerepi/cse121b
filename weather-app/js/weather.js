let currentWeather = {};

const cToF = temp => {
    return (temp * (9 / 5)) + 32;
};

const setWeatherData = city => {
    const apiKey = '3712bfa3df2f46adbf993c696c65340a';
    const api = fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&include=minutely`);
    api
        .then(response => response.json())
        .then(data => {
            const weatherData = data.data[0];
            currentWeather = {
                cityName: weatherData.city_name,
                tempC: weatherData.temp,
                tempF: cToF(weatherData.temp).toFixed(1),
                icon: weatherData.weather.icon,
                description: weatherData.weather.description,
                countryCode: weatherData.country_code
            }
        });
};

const displayWeatherData = () => {
    const weatherDataEl = document.getElementById('weather-data');
    weatherDataEl.innerHTML = `
        <div class="weather-display">
            <h3 class="no-margin">${currentWeather.description}</h3>
            <img src="https://cdn.weatherbit.io/static/img/icons/${currentWeather.icon}.png" alt="${currentWeather.description}">
        </div>

        <h2 class="no-margin">${currentWeather.cityName}, ${currentWeather.countryCode}</h2>
    
        <div class="temperature">
            <div class="fahrenheit">${currentWeather.tempF}&deg; F</div>
            <div class="celsius">${currentWeather.tempC}&deg; C</div>
        </div>
    `;
};

const btn = document.getElementById('search-btn');
btn.addEventListener('click', () => {
    const cityName = document.getElementById('searchbar').value;
    setWeatherData(cityName);
    setTimeout(() => {
        displayWeatherData();
    }, 600);
});