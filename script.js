const API_KEY = '9aeb46a0c8ff172c8060187ee08552e0';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const loading = document.getElementById('loading');
const weatherData = document.getElementById('weatherData');
const errorDiv = document.getElementById('error');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const weatherDesc = document.getElementById('weatherDesc');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');

searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const city = cityInput.value.trim();
    if (city === '') {
        showError('Please enter a city name');
        return;
    }
    getWeatherData(city);
}

async function getWeatherData(city) {
    try {
        showLoading();
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        displayWeatherData(data);
        
    } catch (error) {
        showError(error.message || 'Failed to fetch weather data. Please try again.');
    }
}

function displayWeatherData(data) {
    loading.style.display = 'none';
    errorDiv.style.display = 'none';
    
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = Math.round(data.main.temp);
    weatherDesc.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;
    
    weatherData.style.display = 'block';
}

function showLoading() {
    loading.style.display = 'block';
    weatherData.style.display = 'none';
    errorDiv.style.display = 'none';
}

function showError(message) {
    loading.style.display = 'none';
    weatherData.style.display = 'none';
    errorDiv.style.display = 'block';
    errorDiv.textContent = message;
}
