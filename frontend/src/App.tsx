import { motion } from "framer-motion";
import SearchBar from "./components/SearchBar";
import StatusMessage from "./components/StatusMessage";
import WeatherCard from "./components/WeatherCard";
import EmptyStateContent from "./components/EmptyStateContent";
import { useWeather } from "./hooks/useWeather";
import { getBackgroundClass, getBackgroundImage } from "./utils/weatherVisuals";

function App() {
  const { city, setCity, weather, error, loading, fetchWeather } = useWeather();

  return (
    <motion.div
      className={`min-h-screen ${getBackgroundClass(weather)} flex flex-col items-center justify-center text-white p-4 relative`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${getBackgroundImage(weather)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Weather App 🌤️
      </motion.h1>

      <SearchBar city={city} onCityChange={setCity} onSearch={fetchWeather} />
      <StatusMessage loading={loading} error={error} />
      {!weather && !loading && !error && (
        <EmptyStateContent onQuickCitySelect={(selectedCity) => fetchWeather(selectedCity)} />
      )}
      <WeatherCard weather={weather} />
    </motion.div>
  );
}

export default App;
