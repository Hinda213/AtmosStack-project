import { useState } from "react";
import { fetchWeatherByCity } from "../services/weatherApi";
import type { WeatherData } from "../types/weather";

interface UseWeatherReturn {
  city: string;
  setCity: (value: string) => void;
  weather: WeatherData | null;
  error: string;
  loading: boolean;
  fetchWeather: (cityOverride?: string) => Promise<void>;
}

export const useWeather = (): UseWeatherReturn => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadWeather = async (targetCity: string, shouldUpdateInput = false) => {
    if (!targetCity) return;
    if (shouldUpdateInput) setCity(targetCity);

    setLoading(true);
    setError("");

    try {
      const data = await fetchWeatherByCity(targetCity);

      if (Number(data.cod) !== 200) {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch {
      setError("Error fetching weather");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = async (cityOverride?: string) => {
    const targetCity = cityOverride ?? city;
    await loadWeather(targetCity, Boolean(cityOverride));
  };

  return { city, setCity, weather, error, loading, fetchWeather };
};
