Weather App (Full-stack)

------------

A modern full-stack weather application built with React, TypeScript, tailwind CSS, Express, and Vite. Users can search for any city and view real-time weather data including temepreture, humidity, wind speed, and conditions.

-----------------

🚀 Live Demo
 https://atmos-stack-project-n8bp.vercel.app/ 
---------------

-## 📸 Features

🌍 Search weather by city name
🌡️ Real-time temperature (°C)
🌤️ Weather conditions with icons
💧 Humidity and 🌬 wind speed
🎨 Dynamic background based on weather
⚡ Smooth animations using Framer Motion
❌ Error handling (city not found)
⏳ Loading states
🔐 Secure API key using backend
Tech Stack
React 19
TypeScript
Tailwind CSS
Vite
Framer Motion
Backend
Node.js -Express
Axios
API
-OpenWeatherMap API

---------------
Project Structure
src/
  components/
    EmptyStateContent.tsx
    SearchBar.tsx
    StatusMessage.tsx
    WeatherCard.tsx
  hooks/
    useWeather.ts
  services/
    weatherApi.ts
  types/
    weather.ts
  utils/
    weatherVisuals.ts
  App.tsx
  main.tsx
  
  -----------------
Prerequisites

Node.js 18+ (recommended)
Backend running on http://localhost:4000
Environment Variables
Create a .env file in the frontend folder if you want a custom backend URL:

-------------

VITE_API_BASE_URL=http://localhost:4000
If this is not provided, frontend defaults to http://localhost:4000.

-----------------------
Getting Started
From the frontend directory:
npm install
npm run dev
App runs on the Vite dev server (usually http://localhost:5173).

---------------
Build
npm run build
Backend Quick Start (for full app)
From the backend directory:

------------------
Add your OpenWeather API key in src/.env
Run:
npm install
npm run dev
Backend endpoints:

-----------------
GET /health
GET /weather?city=<cityName>
🧠 What I Learned 
- How to build a full-stack application using React and Express
- Handling API requests and errors properly
- Managing state in React
- Creating responsive UI with Tailwind CSS Adding animations with Framer Motion
- Securing API keys using a backend Deploying frontend and backend separately

-----------------------
🚀 Future Improvements
🌍 Add geolocation (get user’s current city) 
📅 5-day weather forecast 
🌙 Dark mode toggle 
💾 Save recent searches 
📱 Improve mobile responsiveness

------------------
👩‍💻 Author

Your Name Hinda Mohamoud 
GitHub: https://github.com/Hinda213
-------------------
📄 License

This project is open source and available under the MIT License.

