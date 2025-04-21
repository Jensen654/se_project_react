import "../blocks/SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function SideBar() {
  const { currentUser, handleEditClick, handleLogOut } =
    useContext(CurrentUserContext);

  return (
    <div className="side-bar">
      <div className="side-bar__profile_block">
        <img
          src={currentUser.avatarUrl}
          alt="Profile Picture"
          className="side-bar__avatar"
        />
        <h2 className="side-bar__name">{currentUser.name}</h2>
      </div>
      <div className="side-bar__edit_block">
        <button
          onClick={handleEditClick}
          type="button"
          className="side-bar__button"
        >
          Change profile data
        </button>
        <button
          onClick={handleLogOut}
          type="button"
          className="side-bar__button"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
