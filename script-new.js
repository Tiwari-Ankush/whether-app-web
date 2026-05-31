// API Configuration - Open-Meteo (Free Weather API - No Auth Required)
const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1';
const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';

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

    clearError();
    showLoading(true);

    try {
        // Get coordinates from city name
        const coordinates = await geocodeCity(city);
        
        // Fetch weather data using coordinates
        const weatherData = await fetchWeatherData(coordinates);
        displayWeather(weatherData, coordinates);
        searchInput.value = '';
    } catch (error) {
        showError(error.message);
        hideWeather();
    } finally {
        showLoading(false);
    }
}

// Geocode city name to get latitude and longitude
async function geocodeCity(city) {
    try {
        const response = await fetch(
            `${GEOCODING_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        if (!response.ok) {
            throw new Error('Failed to geocode city name.');
        }

        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            throw new Error('❌ City not found. Please check the spelling and try again.');
        }

        const result = data.results[0];
        return {
            latitude: result.latitude,
            longitude: result.longitude,
            name: result.name,
            country: result.country,
            timezone: result.timezone
        };
    } catch (error) {
        throw error;
    }
}

// Fetch Weather Data from Open-Meteo API
async function fetchWeatherData(coordinates) {
    try {
        const params = new URLSearchParams({
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl,cloud_cover,is_day,sunrise,sunset',
            hourly: 'temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m',
            daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset',
            timezone: 'auto',
            forecast_days: 7
        });

        const response = await fetch(
            `${OPEN_METEO_BASE_URL}/forecast?${params}`
        );

        if (!response.ok) {
            throw new Error('❌ Failed to fetch weather data.');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Get weather description from WMO weather code
function getWeatherDescription(code, isDay = true) {
    const weatherCodes = {
        0: 'Clear',
        1: 'Partly Cloudy',
        2: 'Partly Cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Foggy',
        51: 'Light Drizzle',
        53: 'Moderate Drizzle',
        55: 'Heavy Drizzle',
        61: 'Slight Rain',
        63: 'Moderate Rain',
        65: 'Heavy Rain',
        71: 'Slight Snow',
        73: 'Moderate Snow',
        75: 'Heavy Snow',
        77: 'Snow Grains',
        80: 'Slight Rain Showers',
        81: 'Moderate Rain Showers',
        82: 'Violent Rain Showers',
        85: 'Slight Snow Showers',
        86: 'Heavy Snow Showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with Hail',
        99: 'Thunderstorm with Hail'
    };
    return weatherCodes[code] || 'Unknown';
}

// Get weather icon emoji based on weather code
function getWeatherIcon(code, isDay = true) {
    if (code === 0) return '☀️';
    if (code === 1 || code === 2) return isDay ? '⛅' : '🌤️';
    if (code === 3) return '☁️';
    if (code === 45 || code === 48) return '🌫️';
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return '🌧️';
    if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️';
    if ([95, 96, 99].includes(code)) return '⛈️';
    return '🌡️';
}

// Display Weather
function displayWeather(weatherData, coordinates) {
    const current = weatherData.current;
    const daily = weatherData.daily;
    const hourly = weatherData.hourly;

    // Update location info
    document.getElementById('cityName').textContent = `${coordinates.name}, ${coordinates.country}`;
    document.getElementById('weatherDate').textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Update current weather
    document.getElementById('temperature').textContent = `${Math.round(current.temperature_2m)}°C`;
    const weatherDesc = getWeatherDescription(current.weather_code, current.is_day);
    document.getElementById('weatherDescription').textContent = weatherDesc;
    document.getElementById('weatherIcon').textContent = getWeatherIcon(current.weather_code, current.is_day);
    document.getElementById('weatherIcon').style.fontSize = '4rem';
    document.getElementById('feelsLike').textContent = `${Math.round(current.apparent_temperature)}°C`;
    document.getElementById('humidity').textContent = `${current.relative_humidity_2m}%`;
    document.getElementById('windSpeed').textContent = `${Math.round(current.wind_speed_10m)} km/h`;
    document.getElementById('pressure').textContent = `${Math.round(current.pressure_msl)} mb`;
    document.getElementById('visibility').textContent = `${current.cloud_cover}% clouds`;
    document.getElementById('uvIndex').textContent = 'N/A';

    // Update sunrise and sunset
    const sunriseTime = new Date(daily.sunrise[0]);
    const sunsetTime = new Date(daily.sunset[0]);
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

    // Update forecast
    displayForecast(daily);

    // Show weather content, hide welcome
    showWeather();
}

// Display 7-Day Forecast
function displayForecast(daily) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';

    const dates = daily.time;
    const temps = daily.temperature_2m_max;
    const codes = daily.weather_code;

    for (let i = 0; i < Math.min(dates.length, 7); i++) {
        const date = new Date(dates[i]);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const maxTemp = Math.round(temps[i]);
        const minTemp = Math.round(daily.temperature_2m_min[i]);
        const condition = getWeatherDescription(codes[i], true);
        const icon = getWeatherIcon(codes[i], true);

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${dayName}</div>
            <div class="forecast-icon" style="font-size: 2.5rem; margin: 10px auto;">${icon}</div>
            <div class="forecast-temp">${maxTemp}°<span style="opacity: 0.7;">${minTemp}°</span></div>
            <div class="forecast-description">${condition}</div>
        `;
        forecastContainer.appendChild(card);
    }
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Focus on search input
    searchInput.focus();
});
