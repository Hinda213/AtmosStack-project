import { motion } from "framer-motion";
import type { WeatherData } from "../types/weather";
import { getSceneImage } from "../utils/weatherVisuals";

interface WeatherCardProps {
  weather: WeatherData | null;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  if (!weather || !weather.main) return null;
  const visibilityKm =
    typeof weather.visibility === "number" ? (weather.visibility / 1000).toFixed(1) : null;

  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm text-black p-6 rounded-2xl shadow-xl mt-4 text-center w-[22rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">
        {weather.name}
        {weather.sys?.country ? `, ${weather.sys.country}` : ""}
      </h2>

      <img
        src={getSceneImage(weather)}
        alt="weather scene"
        className="mx-auto w-20 h-20 object-contain"
      />

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />

      <p className="text-lg capitalize">{weather.weather[0].description}</p>

      <p className="text-3xl font-bold mt-2">{weather.main.temp}°C</p>
      {typeof weather.main.feels_like === "number" && (
        <p className="text-sm text-gray-700">Feels like {weather.main.feels_like}°C</p>
      )}

      {weather.rainPrediction && (
        <p className="mt-3 rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-900">
          {weather.rainPrediction}
        </p>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-left">
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>🌬 Wind: {weather.wind.speed} m/s</p>
        {typeof weather.wind.gust === "number" && <p>💨 Gust: {weather.wind.gust} m/s</p>}
        {typeof weather.main.pressure === "number" && <p>📈 Pressure: {weather.main.pressure} hPa</p>}
        {typeof weather.clouds?.all === "number" && <p>☁️ Cloud Cover: {weather.clouds.all}%</p>}
        {visibilityKm && <p>👀 Visibility: {visibilityKm} km</p>}
      </div>
    </motion.div>
  );
}
