import type { WeatherData } from "../types/weather";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://atmosstack-project.onrender.com";

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  const url = `${API_BASE_URL}/weather?city=${encodeURIComponent(city)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  return (await response.json()) as WeatherData;
};
