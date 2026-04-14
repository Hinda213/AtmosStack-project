import dotenv = require("dotenv");
import path = require("path");

dotenv.config({ path: path.resolve(process.cwd(), "src/.env") });

const PORT = process.env.PORT || 4000;
const API_KEY = process.env.API_KEY;

export = { PORT, API_KEY };
