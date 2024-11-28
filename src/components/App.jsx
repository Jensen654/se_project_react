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
import AddItemModal from "./AddItemModal.jsx";
import { getItems, postItem, deleteItem } from "../utils/api.js";

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

  const handleResponse = (res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  const handleAddItemSubmit = (newGarment) => {
    postItem(newGarment).then((res) => handleResponse(res));
  };

  const handleDeleteItem = (id) => {
    deleteItem(id).then((res) => handleResponse(res));
  };

  const getItemList = () => {
    getItems().then((res) => handleResponse(res));
  };

  getItemList();

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
                  garmentList={getItemList}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleAddItemClick={handleAddClick}
                  handleCardClick={handleCardClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onAddItem={handleAddItemSubmit}
          onCloseModal={handleCloseClick}
        />
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          handleCloseClick={handleCloseClick}
          isOpen={activeModal === "add-garment"}
          deleteItem={handleDeleteItem}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
