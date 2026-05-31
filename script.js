// API Configuration - OpenWeatherMap
// Get your free API key from: https://openweathermap.org/api
const API_KEY = 'f78526360cc4a73b54bf5bcf566a285e'; // Replace with your actual API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const weatherContent = document.getElementById('weatherContent');
const welcomeSection = document.getElementById('welcomeSection');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Handle Search
async function handleSearch() {
    const city = searchInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    if (API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY_HERE') {
        showError('⚠️ API key not configured. Please add your OpenWeatherMap API key to script.js (line 3)');
        return;
    }

    clearError();
    showLoading(true);

    try {
        const currentWeather = await fetchCurrentWeather(city);
        const forecast = await fetchForecast(city);
        displayWeather(currentWeather, forecast);
        searchInput.value = '';
    } catch (error) {
        showError(error.message);
        hideWeather();
    } finally {
        showLoading(false);
    }
}

// Fetch Current Weather Data from OpenWeatherMap
async function fetchCurrentWeather(city) {
    try {
        const response = await fetch(
            `${API_BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('❌ City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('❌ Invalid API key. Get a free key at https://openweathermap.org/api');
            }
            throw new Error('❌ Failed to fetch weather data. Please try again.');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Fetch 5-Day Forecast Data from OpenWeatherMap
async function fetchForecast(city) {
    try {
        const response = await fetch(
            `${API_BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch forecast data.');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Display Weather
function displayWeather(currentWeather, forecastData) {
    const current = currentWeather;
    const forecastList = forecastData.list;

    // Update location info
    document.getElementById('cityName').textContent = `${current.name}, ${current.sys.country}`;
    document.getElementById('weatherDate').textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Update current weather
    document.getElementById('temperature').textContent = `${Math.round(current.main.temp)}°C`;
    document.getElementById('weatherDescription').textContent = current.weather[0].main;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;
    document.getElementById('feelsLike').textContent = `${Math.round(current.main.feels_like)}°C`;
    document.getElementById('humidity').textContent = `${current.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `${Math.round(current.wind.speed)} km/h`;
    document.getElementById('pressure').textContent = `${current.main.pressure} mb`;
    document.getElementById('visibility').textContent = `${(current.visibility / 1000).toFixed(1)} km`;
    document.getElementById('uvIndex').textContent = current.clouds ? Math.round(current.clouds.all / 10) : 'N/A';

    // Update sunrise and sunset
    const sunriseTime = new Date(current.sys.sunrise * 1000);
    const sunsetTime = new Date(current.sys.sunset * 1000);
    document.getElementById('sunrise').textContent = sunriseTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    });
    document.getElementById('sunset').textContent = sunsetTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    });

    // Update forecast (5-day, 3-hour intervals)
    displayForecast(forecastList);

    // Show weather content, hide welcome
    showWeather();
}

// Display 5-Day Forecast (process to get one per day at noon)
function displayForecast(forecastList) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';

    // Group forecasts by day and find midday forecasts
    const dailyForecasts = {};
    
    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayKey = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        
        if (!dailyForecasts[dayKey]) {
            dailyForecasts[dayKey] = forecast;
        } else {
            // Replace if this time is closer to noon (12:00)
            const currentTime = new Date(dailyForecasts[dayKey].dt * 1000).getHours();
            const newTime = date.getHours();
            if (Math.abs(newTime - 12) < Math.abs(currentTime - 12)) {
                dailyForecasts[dayKey] = forecast;
            }
        }
    });

    // Display up to 7 days
    Object.values(dailyForecasts).slice(0, 7).forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(day.main.temp);
        const condition = day.weather[0].main;
        const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${dayName}</div>
            <img src="${icon}" alt="${condition}" class="forecast-icon" style="width: 50px; height: 50px; margin: 10px auto;">
            <div class="forecast-temp">${temp}°C</div>
            <div class="forecast-description">${condition}</div>
        `;
        forecastContainer.appendChild(card);
    });
}

// Utility Functions
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

function clearError() {
    errorMessage.textContent = '';
    errorMessage.classList.remove('show');
}

function showLoading(show) {
    if (show) {
        loadingSpinner.classList.remove('hidden');
        loadingSpinner.classList.add('show');
    } else {
        loadingSpinner.classList.add('hidden');
        loadingSpinner.classList.remove('show');
    }
}

function showWeather() {
    weatherContent.classList.remove('hidden');
    weatherContent.classList.add('show');
    welcomeSection.style.display = 'none';
}

function hideWeather() {
    weatherContent.classList.add('hidden');
    weatherContent.classList.remove('show');
    welcomeSection.style.display = 'block';
}

function convertTo12Hour(time24) {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Focus on search input
    searchInput.focus();
});