import dotenv = require("dotenv");
import path = require("path");

// In production (e.g. Render), variables come from process.env.
// For local development, support both backend/.env and backend/src/.env.
dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), "src/.env") });

const PORT = process.env.PORT || 4000;
const API_KEY = process.env.API_KEY || process.env.OPENWEATHER_API_KEY;

export = { PORT, API_KEY };
