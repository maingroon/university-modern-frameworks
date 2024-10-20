document.getElementById('loadWeather').addEventListener('click', async () => {
    const weatherDataDiv = document.getElementById('weatherData');
    const loadingIndicator = document.getElementById('loading');

    loadingIndicator.style.display = 'block'; // Показуємо індикатор завантаження
    weatherDataDiv.innerHTML = ''; // Очищуємо попередні дані

    try {
        const data = await loadWeather();

        // Відображаємо дані про погоду
        weatherDataDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        weatherDataDiv.innerHTML = '<p>Error loading weather data. Please try again later.</p>';
    } finally {
        loadingIndicator.style.display = 'none'; // Ховаємо індикатор завантаження
    }
});

async function loadWeather() {
    // Перевіряємо, чи є дані в localStorage та чи не застаріли вони
    const cachedWeather = localStorage.getItem('weatherData');
    if (cachedWeather && (Date.now() - JSON.parse(cachedWeather).timestamp) < (1000 * 60 * 5)) {
        console.log('Using cached weather data');
        return JSON.parse(cachedWeather).data;
    }

    // Якщо дані в localStorage відсутні або застаріли, завантажуємо нові дані
    console.log('Fetching new weather data');
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=1036d0d938602c9d46019c3fb779c8f2');
    const data = await response.json();
    localStorage.setItem('weatherData', JSON.stringify({ data, timestamp: Date.now() }));
    return data;
}