import type { WeatherData } from "../types/weather";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1600&q=80";

const getMainWeather = (weather: WeatherData | null): string => {
  if (!weather) return "";
  return weather.weather[0]?.main ?? "";
};

export const getBackgroundClass = (weather: WeatherData | null): string => {
  const main = getMainWeather(weather);

  if (main.includes("Cloud")) return "bg-gray-500";
  if (main.includes("Rain")) return "bg-blue-700";
  if (main.includes("Clear")) return "bg-yellow-400";
  if (main.includes("Snow")) return "bg-blue-200";
  return "bg-blue-500";
};

export const getBackgroundImage = (weather: WeatherData | null): string => {
  const main = getMainWeather(weather);

  if (main.includes("Cloud")) {
    return "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1600&q=80";
  }
  if (main.includes("Rain")) {
    return "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1600&q=80";
  }
  if (main.includes("Clear")) {
    return "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80";
  }
  if (main.includes("Snow")) {
    return "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1600&q=80";
  }
  return DEFAULT_BG;
};

export const getSceneImage = (weather: WeatherData | null): string => {
  const main = getMainWeather(weather);

  if (main.includes("Cloud")) return "https://cdn-icons-png.flaticon.com/512/414/414825.png";
  if (main.includes("Rain")) return "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
  if (main.includes("Clear")) return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  if (main.includes("Snow")) return "https://cdn-icons-png.flaticon.com/512/642/642102.png";
  return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
};
