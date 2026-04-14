import { motion } from "framer-motion";

interface StatusMessageProps {
  loading: boolean;
  error: string;
}

export default function StatusMessage({ loading, error }: StatusMessageProps) {
  if (loading) {
    return (
      <motion.p
        className="bg-blue-900 p-5 border-none rounded-lg text-white text-3xl font-bold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading...
      </motion.p>
    );
  }

  if (error) {
    return (
      <motion.p
        className="bg-red-400 border-none p-5 rounded-lg mt-10 text-3xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {error}
      </motion.p>
    );
  }

  return null;
}
