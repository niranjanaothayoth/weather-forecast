document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
  const city = document.getElementById('city').value.trim();
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33de43693a67cd92acc9c6c23fb0a8ad&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`City not found. Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => displayWeather(data))
    .catch((error) => alert(error.message));
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weatherInfo');
  weatherInfoDiv.innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
