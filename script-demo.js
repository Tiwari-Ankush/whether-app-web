// Mock Weather Data for Demo/Presentation
const MOCK_WEATHER_DATA = {
    london: {
        coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
            name: 'London',
            country: 'United Kingdom',
            timezone: 'Europe/London'
        },
        current: {
            temperature_2m: 18,
            relative_humidity_2m: 65,
            apparent_temperature: 16,
            weather_code: 2,
            wind_speed_10m: 12,
            wind_direction_10m: 230,
            pressure_msl: 1013,
            cloud_cover: 45,
            is_day: 1,
            sunrise: '2026-05-15T05:45:00',
            sunset: '2026-05-15T20:45:00'
        },
        daily: {
            time: ['2026-05-15', '2026-05-16', '2026-05-17', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21'],
            weather_code: [2, 1, 3, 61, 2, 0, 1],
            temperature_2m_max: [20, 19, 17, 15, 21, 22, 20],
            temperature_2m_min: [14, 13, 12, 10, 11, 13, 14],
            sunrise: ['2026-05-15T05:45:00', '2026-05-16T05:44:00', '2026-05-17T05:43:00', '2026-05-18T05:42:00', '2026-05-19T05:41:00', '2026-05-20T05:40:00', '2026-05-21T05:39:00'],
            sunset: ['2026-05-15T20:45:00', '2026-05-16T20:46:00', '2026-05-17T20:47:00', '2026-05-18T20:48:00', '2026-05-19T20:49:00', '2026-05-20T20:50:00', '2026-05-21T20:51:00']
        }
    },
    newyork: {
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060,
            name: 'New York',
            country: 'United States',
            timezone: 'America/New_York'
        },
        current: {
            temperature_2m: 24,
            relative_humidity_2m: 58,
            apparent_temperature: 23,
            weather_code: 1,
            wind_speed_10m: 8,
            wind_direction_10m: 180,
            pressure_msl: 1015,
            cloud_cover: 30,
            is_day: 1,
            sunrise: '2026-05-15T05:30:00',
            sunset: '2026-05-15T20:30:00'
        },
        daily: {
            time: ['2026-05-15', '2026-05-16', '2026-05-17', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21'],
            weather_code: [1, 0, 1, 2, 61, 2, 0],
            temperature_2m_max: [26, 28, 25, 22, 20, 24, 27],
            temperature_2m_min: [18, 19, 17, 15, 14, 16, 18],
            sunrise: ['2026-05-15T05:30:00', '2026-05-16T05:29:00', '2026-05-17T05:28:00', '2026-05-18T05:27:00', '2026-05-19T05:26:00', '2026-05-20T05:25:00', '2026-05-21T05:24:00'],
            sunset: ['2026-05-15T20:30:00', '2026-05-16T20:31:00', '2026-05-17T20:32:00', '2026-05-18T20:33:00', '2026-05-19T20:34:00', '2026-05-20T20:35:00', '2026-05-21T20:36:00']
        }
    },
    tokyo: {
        coordinates: {
            latitude: 35.6762,
            longitude: 139.6503,
            name: 'Tokyo',
            country: 'Japan',
            timezone: 'Asia/Tokyo'
        },
        current: {
            temperature_2m: 22,
            relative_humidity_2m: 72,
            apparent_temperature: 20,
            weather_code: 3,
            wind_speed_10m: 6,
            wind_direction_10m: 90,
            pressure_msl: 1012,
            cloud_cover: 70,
            is_day: 0,
            sunrise: '2026-05-15T04:45:00',
            sunset: '2026-05-15T18:45:00'
        },
        daily: {
            time: ['2026-05-15', '2026-05-16', '2026-05-17', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21'],
            weather_code: [3, 2, 61, 1, 0, 1, 2],
            temperature_2m_max: [25, 24, 21, 23, 26, 25, 24],
            temperature_2m_min: [18, 17, 16, 17, 19, 20, 19],
            sunrise: ['2026-05-15T04:45:00', '2026-05-16T04:44:00', '2026-05-17T04:43:00', '2026-05-18T04:42:00', '2026-05-19T04:41:00', '2026-05-20T04:40:00', '2026-05-21T04:39:00'],
            sunset: ['2026-05-15T18:45:00', '2026-05-16T18:46:00', '2026-05-17T18:47:00', '2026-05-18T18:48:00', '2026-05-19T18:49:00', '2026-05-20T18:50:00', '2026-05-21T18:51:00']
        }
    },
    paris: {
        coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
            name: 'Paris',
            country: 'France',
            timezone: 'Europe/Paris'
        },
        current: {
            temperature_2m: 19,
            relative_humidity_2m: 62,
            apparent_temperature: 18,
            weather_code: 1,
            wind_speed_10m: 10,
            wind_direction_10m: 270,
            pressure_msl: 1014,
            cloud_cover: 35,
            is_day: 1,
            sunrise: '2026-05-15T05:50:00',
            sunset: '2026-05-15T21:00:00'
        },
        daily: {
            time: ['2026-05-15', '2026-05-16', '2026-05-17', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21'],
            weather_code: [1, 0, 2, 61, 1, 0, 1],
            temperature_2m_max: [21, 23, 20, 17, 22, 24, 21],
            temperature_2m_min: [15, 14, 13, 11, 12, 14, 15],
            sunrise: ['2026-05-15T05:50:00', '2026-05-16T05:49:00', '2026-05-17T05:48:00', '2026-05-18T05:47:00', '2026-05-19T05:46:00', '2026-05-20T05:45:00', '2026-05-21T05:44:00'],
            sunset: ['2026-05-15T21:00:00', '2026-05-16T21:01:00', '2026-05-17T21:02:00', '2026-05-18T21:03:00', '2026-05-19T21:04:00', '2026-05-20T21:05:00', '2026-05-21T21:06:00']
        }
    },
    sydney: {
        coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
            name: 'Sydney',
            country: 'Australia',
            timezone: 'Australia/Sydney'
        },
        current: {
            temperature_2m: 28,
            relative_humidity_2m: 55,
            apparent_temperature: 27,
            weather_code: 0,
            wind_speed_10m: 14,
            wind_direction_10m: 45,
            pressure_msl: 1018,
            cloud_cover: 20,
            is_day: 0,
            sunrise: '2026-05-15T06:30:00',
            sunset: '2026-05-15T17:15:00'
        },
        daily: {
            time: ['2026-05-15', '2026-05-16', '2026-05-17', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21'],
            weather_code: [0, 1, 2, 1, 0, 2, 1],
            temperature_2m_max: [30, 29, 27, 26, 28, 27, 29],
            temperature_2m_min: [22, 21, 20, 19, 21, 20, 22],
            sunrise: ['2026-05-15T06:30:00', '2026-05-16T06:31:00', '2026-05-17T06:32:00', '2026-05-18T06:33:00', '2026-05-19T06:34:00', '2026-05-20T06:35:00', '2026-05-21T06:36:00'],
            sunset: ['2026-05-15T17:15:00', '2026-05-16T17:14:00', '2026-05-17T17:13:00', '2026-05-18T17:12:00', '2026-05-19T17:11:00', '2026-05-20T17:10:00', '2026-05-21T17:09:00']
        }
    },
    dubai: {
        coordinates: {
            latitude: 25.2048,
            longitude: 55.2708,
            name: 'Dubai',
            country: 'United Arab Emirates',
            timezone: 'Asia/Dubai'
        },
        current: {
            temperature_2m: 35,
            relative_humidity_2m: 45,
            apparent_temperature: 33,
            weather_code: 0,
            wind_speed_10m: 5,
            wind_direction_10m: 120,
            pressure_msl: 1008,
            cloud_cover: 10,
            is_day: 1,
            sunrise: '2026-05-15T05:15:00',
            sunset: '2026-05-15T18:45:00'
        },
        daily: {
            time: ['2026-05-15', '2026-05-16', '2026-05-17', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21'],
            weather_code: [0, 0, 1, 2, 0, 1, 0],
            temperature_2m_max: [37, 36, 34, 32, 38, 36, 37],
            temperature_2m_min: [28, 27, 26, 25, 27, 28, 28],
            sunrise: ['2026-05-15T05:15:00', '2026-05-16T05:15:00', '2026-05-17T05:16:00', '2026-05-18T05:16:00', '2026-05-19T05:17:00', '2026-05-20T05:17:00', '2026-05-21T05:18:00'],
            sunset: ['2026-05-15T18:45:00', '2026-05-16T18:46:00', '2026-05-17T18:47:00', '2026-05-18T18:48:00', '2026-05-19T18:49:00', '2026-05-20T18:50:00', '2026-05-21T18:51:00']
        }
    }
};

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
    const city = searchInput.value.trim().toLowerCase();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    clearError();
    showLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        // Check if city exists in mock data
        if (!MOCK_WEATHER_DATA[city]) {
            throw new Error(`❌ City "${searchInput.value}" not found. Try: London, New York, Tokyo, Paris, Sydney, or Dubai`);
        }

        const mockData = MOCK_WEATHER_DATA[city];
        displayWeather(mockData);
        searchInput.value = '';
    } catch (error) {
        showError(error.message);
        hideWeather();
    } finally {
        showLoading(false);
    }
}

// Get weather description from WMO weather code
function getWeatherDescription(code, isDay = true) {
    const weatherCodes = {
        0: 'Clear Sky',
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
function displayWeather(mockData) {
    const current = mockData.current;
    const daily = mockData.daily;
    const coordinates = mockData.coordinates;

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
    
    // Apply animation based on weather condition
    applyWeatherAnimation(current.weather_code);
    
    // Change background based on weather
    setWeatherBackground(current.weather_code, current.is_day);
    
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

// Set background based on weather condition
function setWeatherBackground(weatherCode, isDay) {
    const body = document.body;
    
    // Remove all weather classes
    body.classList.remove('weather-clear-day', 'weather-clear-night', 'weather-cloudy-day', 'weather-cloudy-night', 'weather-rainy', 'weather-snow', 'weather-thunderstorm', 'weather-fog');
    
    // Add appropriate class based on weather code
    if (weatherCode === 0) {
        body.classList.add(isDay ? 'weather-clear-day' : 'weather-clear-night');
    } else if (weatherCode === 1 || weatherCode === 2) {
        body.classList.add(isDay ? 'weather-cloudy-day' : 'weather-cloudy-night');
    } else if (weatherCode === 3) {
        body.classList.add(isDay ? 'weather-cloudy-day' : 'weather-cloudy-night');
    } else if (weatherCode === 45 || weatherCode === 48) {
        body.classList.add('weather-fog');
    } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
        body.classList.add('weather-rainy');
    } else if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
        body.classList.add('weather-snow');
    } else if ([95, 96, 99].includes(weatherCode)) {
        body.classList.add('weather-thunderstorm');
    }
}

// Apply animation to weather icon based on condition
function applyWeatherAnimation(weatherCode) {
    const icon = document.getElementById('weatherIcon');
    
    // Remove all animation classes
    icon.classList.remove('rainy', 'snowy', 'stormy');
    
    // Add appropriate animation class
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
        icon.classList.add('rainy');
    } else if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
        icon.classList.add('snowy');
    } else if ([95, 96, 99].includes(weatherCode)) {
        icon.classList.add('stormy');
    }
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
