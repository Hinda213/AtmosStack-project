import { motion } from "framer-motion";

interface SearchBarProps {
  city: string;
  onCityChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ city, onCityChange, onSearch }: SearchBarProps) {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
        className="p-2 rounded-l text-white focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold text-2xl"
      />
      <motion.button
        onClick={() => onSearch()}
        className="bg-black text-white p-2 rounded-r font-bold text-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Search
      </motion.button>
    </div>
  );
}
