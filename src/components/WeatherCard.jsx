import { weatherTypes } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { useContext } from "react";
import "../blocks/WeatherCard.css";

function WeatherCard({ weatherData }) {
  const weatherType = weatherTypes.filter((type) => {
    return (
      type.day === weatherData.isDay && type.condition === weatherData.condition
    );
  });

  const weatherUrl = weatherType[0]?.url;

  const TempCon = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[TempCon.currentTemperatureUnit]} &deg;{" "}
        {TempCon.currentTemperatureUnit}
      </p>
      <img
        src={weatherUrl}
        alt={`Weather Type: ${weatherType[0]?.condition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
