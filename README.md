# 🌤️ Weather By Marvellous

A clean and responsive weather application built with **React** and **Material UI** that fetches real-time weather data using the **OpenWeatherMap API**. Search any city in the world and instantly get live weather conditions with dynamic visuals.

---

## 📸 Preview

| Hot Weather ☀️ | Rainy Weather ⛈️ | Cold Weather ❄️ |
|:-:|:-:|:-:|
| Sunny card with hot image | Thunderstorm card with rain image | Snow card with cold image |

> Card image and icon change dynamically based on temperature and humidity.

---

## ✨ Features

- 🔍 Search weather by **city name**
- 🌡️ Displays **current temperature**, **min/max temp**, **humidity**, and **feels like**
- 🖼️ **Dynamic card image** changes based on weather conditions (Hot / Rainy / Cold)
- 🎨 **Dynamic weather icon** — Sunny, Thunderstorm, or Snow icon
- ❌ Error handling for invalid city names
- 📱 Responsive UI using **Material UI components**

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React | Frontend framework |
| Material UI (MUI) | UI components & icons |
| OpenWeatherMap API | Real-time weather data |
| useState Hook | State management |

---

## 📂 Project Structure

```
src/
├── WeatherApp.jsx       # Root component, manages weather state
├── SearchBox.jsx        # Input form, API call logic
├── InfoBox.jsx          # Weather info card with dynamic image & icon
├── SearchBox.css        # Styles for search box
├── InfoBox.css          # Styles for info card
└── App.js               # App entry point
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mangesh-03/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API Key

In `SearchBox.jsx`, replace the API key with your own from [OpenWeatherMap](https://openweathermap.org/api):

```js
let API_KEY = "your_api_key_here";
```

### 4. Run the app

```bash
npm start
```

App runs at `http://localhost:3000`

---

## 🌦️ Weather Logic

| Condition | Image | Icon |
|---|---|---|
| Humidity > 80% | Rainy image | ⛈️ ThunderstormIcon |
| Temp > 15°C | Sunny image | ☀️ SunnyIcon |
| Temp ≤ 15°C | Cold image | ❄️ AcUnitIcon |

---

## 📦 Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

---

## 🔑 API Reference

**OpenWeatherMap — Current Weather**

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

| Parameter | Description |
|---|---|
| `q` | City name |
| `appid` | Your API key |
| `units=metric` | Temperature in °C |

---

## ⚠️ Note

> The API key in the source code is publicly visible. For production, move it to a `.env` file:
> ```
> REACT_APP_API_KEY=your_api_key_here
> ```
> Then use it as `process.env.REACT_APP_API_KEY` in your component.

---

## 👤 Author

**Mangesh Ashok Bedre**

---

## 📄 License

This project is for educational purposes. Feel free to use and modify.
