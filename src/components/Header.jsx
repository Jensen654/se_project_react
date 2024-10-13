import "../blocks/Header.css";
import headerLogo from "../images/logo.svg";
import avatar from "../images/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Page Logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
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
