import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { location, apiKey } from "../utils/constants.js";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main.jsx";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import Profile from "./Profile";

import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [checked, setChecked] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(location, apiKey)
      .then((res) => {
        const filteredWeatherData = filterWeatherData(res);

        setWeatherData(filteredWeatherData);
      })
      .catch(console.error);
  }, []);

  const handleToggleSwitchChange = () => {
    setChecked(!checked);
    if (!checked) {
      setCurrentTemperatureUnit("C");
    } else if (checked) {
      setCurrentTemperatureUnit("F");
    }
    console.log(currentTemperatureUnit);
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange, checked }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
        <ModalWithForm
          buttonText="Add Garment"
          title="New Garment"
          handleCloseClick={handleCloseClick}
          isOpen={activeModal === "add-garment"}
        >
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__label_type_radio">
              <input
                name="weathertype"
                type="radio"
                className="modal__radio-input"
                id="hot"
              />{" "}
              Hot
            </label>
            <label htmlFor="warm" className="modal__label_type_radio">
              <input
                name="weathertype"
                type="radio"
                className="modal__radio-input"
                id="warm"
              />{" "}
              Warm
            </label>
            <label htmlFor="cold" className="modal__label_type_radio">
              <input
                name="weathertype"
                type="radio"
                className="modal__radio-input"
                id="cold"
              />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          handleCloseClick={handleCloseClick}
          isOpen={activeModal === "add-garment"}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
