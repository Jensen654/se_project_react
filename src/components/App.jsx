import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { location, apiKey } from "../utils/constants.js";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main.jsx";
import Footer from "./Footer";
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
  const [clothingItems, setClothingItems] = useState([]);

  const getItemList = async () => {
    try {
      const items = await getItems();
      setClothingItems(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

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

  useEffect(() => {
    getItemList();
  }, []);

  const handleToggleSwitchChange = () => {
    setChecked(!checked);
    if (!checked) {
      setCurrentTemperatureUnit("C");
    } else if (checked) {
      setCurrentTemperatureUnit("F");
    }
  };

  const handleAddItemSubmit = (newGarment) => {
    postItem(newGarment)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseClick();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (selectedCard) => {
    deleteItem(selectedCard._id)
      .then(() => {
        const newList = clothingItems.filter(
          (item) => item._id !== selectedCard._id
        );
        setClothingItems(newList);
        handleCloseClick();
      })
      .catch(console.error);
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
                  garmentList={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleAddItemClick={handleAddClick}
                  handleCardClick={handleCardClick}
                  itemList={clothingItems}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          clothingItems={clothingItems}
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
