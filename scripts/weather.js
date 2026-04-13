let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.querySelector("#weather-output");
function renderWeather() {
  output_element.innerHTML = "";
  output_element.className = "";

  if (is_loading) {
    output_element.className = "loading";
    output_element.textContent = "Loading...";
    return;
  }

  if (error_message) {
    output_element.className = "error";
    output_element.textContent = error_message;
    return;
  }

  if (weather_data) {
    const current = weather_data.properties.periods[0];

    const temp = document.createElement("p");
    temp.className = "temp-display";
    temp.innerHTML = `${current.temperature}&deg;`;

    const forecast = document.createElement("p");
    forecast.className = "forecast-text";
    forecast.textContent = current.shortForecast;

    output_element.appendChild(temp);
    output_element.appendChild(forecast);
  } else {
    output_element.textContent = "Weather data unavailable.";
  }
}

async function getWeatherData() {
  const url = "https://api.weather.gov/gridpoints/MSO/105,131/forecast";

  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`System Error: ${response.status} - Data Unreachable`);
    }

    weather_data = await response.json();
  } catch (err) {
    error_message = err.message;
  } finally {
    is_loading = false;
    renderWeather();
  }
}

getWeatherData();
