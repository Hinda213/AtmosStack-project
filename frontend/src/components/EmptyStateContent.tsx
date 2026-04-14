import { motion } from "framer-motion";

interface EmptyStateContentProps {
  onQuickCitySelect: (city: string) => void;
}

const QUICK_CITIES = ["Colombo", "London", "Tokyo", "Sydney", "New York", "Dubai"];

export default function EmptyStateContent({ onQuickCitySelect }: EmptyStateContentProps) {
  return (
    <motion.div
      className="mt-6 w-full max-w-2xl rounded-2xl bg-black/35 p-6 text-white backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold">Explore current weather quickly</h2>
      <p className="mt-2 text-base text-white/90">
        Search for any city, or start with one of these popular locations.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {QUICK_CITIES.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => onQuickCitySelect(city)}
            className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/35"
          >
            {city}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
