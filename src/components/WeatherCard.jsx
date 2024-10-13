import { weatherTypes } from "../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherType = weatherTypes.filter((type) => {
    return (
      type.day === weatherData.isDay && type.condition === weatherData.condition
    );
  });

  const weatherUrl = weatherType[0]?.url;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg;</p>
      <img
        src={weatherUrl}
        alt={`Weather Type: ${weatherType[0]?.condition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
