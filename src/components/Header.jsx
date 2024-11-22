import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";

import "../blocks/Header.css";

import headerLogo from "../images/logo.svg";
import avatar from "../images/avatar.png";
import ToggleSwitch from "./ToggleSwitch";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const TempCon = useContext(CurrentTemperatureUnitContext);

  return (
    <header className="header">
      <Link to={"/"}>
        <img className="header__logo" src={headerLogo} alt="Page Logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch
        value={TempCon.checked}
        onTempClick={TempCon.handleToggleSwitchChange}
      />
      <button onClick={handleAddClick} type="button" className="header__button">
        + Add Clothes
      </button>
      <Link to={"/profile"}>
        <div className="header__user_container">
          <p className="header__user_name">Jensen Bean</p>
          <img
            src={avatar}
            alt="User Avatar Image"
            className="header__avatar"
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
