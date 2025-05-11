import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { apiKey } from "../utils/constants.js";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main.jsx";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import Profile from "./Profile";
import AddItemModal from "./AddItemModal.jsx";
import {
  getItems,
  postItem,
  deleteItem,
  addCardLike,
  removeCardLike,
  getUserLocation,
} from "../utils/api.js";
import {
  registerUser,
  signInUser,
  checkToken,
  editUser,
} from "../utils/auth.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import RegisterModal from "./RegisterModal.jsx";
import LoginModal from "./LoginModal.jsx";

import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { AuthorizationContext } from "../contexts/AuthorizationContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatarUrl: "",
    _id: "",
  });
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((user) => {
          setIsLoggedIn(true);

          setCurrentUser({
            name: user.data.name,
            avatarUrl: user.data.avatar,
            _id: user.data._id,
          });
        })
        .catch((err) => {
          console.error("Error checking token:", err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  useEffect(() => {
    getUserLocation()
      .then((data) => {
        const location = {
          latitude: data.latitude,
          longitude: data.longitude,
        };
        getWeather(location, apiKey)
          .then((res) => {
            const filteredWeatherData = filterWeatherData(res);

            setWeatherData(filteredWeatherData);
          })
          .catch(console.error);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getItemList();
  }, []);

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

  const handleLoginClick = () => {
    setActiveModal("sign-in");
  };

  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleEditClick = () => {
    setActiveModal("edit-profile");
  };

  const handleToggleSwitchChange = () => {
    setChecked(!checked);
    if (!checked) {
      setCurrentTemperatureUnit("C");
    } else if (checked) {
      setCurrentTemperatureUnit("F");
    }
  };

  const handleAddItemSubmit = (newGarment) => {
    setButtonText("Working");
    const jwt = localStorage.getItem("jwt");
    return postItem(newGarment, jwt)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseClick();
      })
      .catch(console.error);
  };

  const handleSignIn = ({ email, password }) => {
    setButtonText("Working");
    return signInUser(email, password)
      .then((data) => {
        handleCloseClick();
        setIsLoggedIn(true);
        setCurrentUser({
          name: data.user.name,
          avatarUrl: data.user.avatar,
          _id: data.user._id,
        });

        localStorage.setItem("jwt", data.token);
      })
      .catch(console.error);
  };

  const handleRegistration = ({ name, avatar, email, password }) => {
    setButtonText("Working");
    return registerUser(name, avatar, email, password)
      .then(() => {
        handleSignIn({ email, password });
      })
      .catch(console.error);
  };

  const handleDeleteItem = (selectedCard) => {
    const jwt = localStorage.getItem("jwt");
    deleteItem(selectedCard._id, jwt)
      .then(() => {
        const newList = clothingItems.filter(
          (item) => item._id !== selectedCard._id
        );
        setClothingItems(newList);
        handleCloseClick();
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    handleCloseClick();
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({ name: "", avatarUrl: "", _id: "" });
  };

  const handleEditProfile = (newName, newAvatarUrl) => {
    setButtonText("Working");
    const jwt = localStorage.getItem("jwt");
    return editUser(jwt, newName, newAvatarUrl)
      .then(() => {
        handleCloseClick();
        setCurrentUser({
          name: newName,
          avatarUrl: newAvatarUrl,
          _id: currentUser._id,
        });
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const jwt = localStorage.getItem("jwt");
    const cardLikeRequest = !isLiked
      ? addCardLike(id, jwt)
      : removeCardLike(id, jwt);

    cardLikeRequest
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch(console.error);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{
          currentUser,
          ItemModal,
          handleEditClick,
          handleLogOut,
          handleEditProfile,
          handleCardLike,
        }}
      >
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange, checked }}
        >
          <AuthorizationContext.Provider
            value={{
              isLoggedIn,
              handleSignIn,
              handleRegistration,
              handleLoginClick,
              handleSignUpClick,
              buttonText,
              setButtonText,
            }}
          >
            <div className="page__content">
              <Header
                handleAddClick={handleAddClick}
                weatherData={weatherData}
                handleSignUpClick={handleSignUpClick}
                handleLoginClick={handleLoginClick}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      handleCardClick={handleCardClick}
                      garmentList={clothingItems}
                      onCardLike={handleCardLike}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile
                        handleAddItemClick={handleAddClick}
                        handleCardClick={handleCardClick}
                        itemList={clothingItems}
                        isOpen={activeModal === "edit-profile"}
                        handleCloseClick={handleCloseClick}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <RegisterModal
                      isOpen={activeModal === "add-garment"}
                      onCloseModal={handleCloseClick}
                    />
                  }
                ></Route>
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
            <RegisterModal
              isOpen={activeModal === "sign-up"}
              handleCloseClick={handleCloseClick}
            />
            <LoginModal
              isOpen={activeModal === "sign-in"}
              handleCloseClick={handleCloseClick}
            />
          </AuthorizationContext.Provider>
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
