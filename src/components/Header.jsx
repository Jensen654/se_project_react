import { useContext } from "react";
import { Link } from "react-router-dom";

import "../blocks/Header.css";

import headerLogo from "../images/logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { AuthorizationContext } from "../contexts/AuthorizationContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Header({
  handleAddClick,
  weatherData,
  handleSignUpClick,
  handleLoginClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const { checked, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  const { isLoggedIn } = useContext(AuthorizationContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to={"/"}>
        <img className="header__logo" src={headerLogo} alt="Page Logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch value={checked} onTempClick={handleToggleSwitchChange} />

      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__button"
          >
            + Add Clothes
          </button>
          <Link to={"/profile"}>
            <div className="header__user_container">
              <p className="header__user_name">{currentUser.name}</p>
              {currentUser.avatarUrl ? (
                <img
                  src={currentUser.avatarUrl}
                  alt="User Avatar Image"
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar header__avatar_fallback">
                  {currentUser.name || "??"}
                </div>
              )}
            </div>
          </Link>
        </>
      ) : (
        <div className="header__authorization_container">
          <button
            onClick={handleSignUpClick}
            type="button"
            className="header__sign-up"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            type="button"
            className="header__login"
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
