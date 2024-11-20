import { useContext } from "react";

import "../blocks/Header.css";

import headerLogo from "../images/logo.svg";
import avatar from "../images/avatar.png";
import ToggleSwitch from "./ToggleSwitch";
import { TempContext } from "../utils/contexts";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const TempCon = useContext(TempContext);

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Page Logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button onClick={handleAddClick} type="button" className="header__button">
        + Add Clothes
      </button>
      <div className="header__user_container">
        <p className="header__user_name">Jensen Bean</p>
        <img src={avatar} alt="User Avatar Image" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
