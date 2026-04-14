import Express = require("express");
import env = require("../config/env");
import weatherService = require("../services/weatherService");

const router = Express.Router();
const { API_KEY } = env;
const { fetchWeatherWithPrediction } = weatherService;

router.get("/weather", async (req, res) => {
  const city = req.query.city as string;

  if (!city) {
    res.status(400).json({ error: "City query parameter is required" });
    return;
  }

  if (!API_KEY) {
    res.status(500).json({ error: "Weather API key is not configured" });
    return;
  }

  try {
    const weatherData = await fetchWeatherWithPrediction(city, API_KEY);
    res.json(weatherData);
  } catch {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export = router;
