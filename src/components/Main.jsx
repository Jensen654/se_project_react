import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import "../blocks/Main.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext } from "react";

function Main({ weatherData, handleCardClick, garmentList, onCardLike }) {
  const TempCon = useContext(CurrentTemperatureUnitContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[TempCon.currentTemperatureUnit]}
          &deg; {TempCon.currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {console.log("Weather type:", weatherData.type)}
          {console.log("Garment list:", garmentList)}
          {garmentList
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              if (item.owner === currentUser._id) {
                return (
                  <ItemCard
                    item={item}
                    key={item._id}
                    handleCardClick={handleCardClick}
                    onCardLike={onCardLike}
                  />
                );
              }
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
