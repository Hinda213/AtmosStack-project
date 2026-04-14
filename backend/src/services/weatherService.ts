import axios = require("axios");

const buildRainPrediction = (weatherData: any): string => {
  const mainWeather = weatherData?.weather?.[0]?.main?.toLowerCase?.() || "";
  const cloudiness = weatherData?.clouds?.all ?? 0;
  const hasRainNow = typeof weatherData?.rain === "object";

  if (hasRainNow || mainWeather.includes("rain") || cloudiness >= 80) {
    return "High chance of rain";
  }

  if (cloudiness >= 50) {
    return "Possible light rain";
  }

  return "Low chance of rain";
};

const fetchWeatherWithPrediction = async (city: string, apiKey: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
  );

  const weatherData = response.data;
  return {
    ...weatherData,
    rainPrediction: buildRainPrediction(weatherData),
  };
};

export = { fetchWeatherWithPrediction };
