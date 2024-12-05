import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import "../blocks/Main.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { useContext } from "react";

function Main({ weatherData, handleCardClick, garmentList }) {
  const TempCon = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[TempCon.currentTemperatureUnit]}
          &deg; {TempCon.currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {garmentList
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  item={item}
                  key={item._id}
                  handleCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
