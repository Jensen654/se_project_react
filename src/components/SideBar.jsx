import avatar from "../images/avatar.png";
import "../blocks/SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <img src={avatar} alt="Profile Picture" className="side-bar__avatar" />
      <h2 className="side-bar__name">Jensen Bean</h2>
    </div>
  );
}

export default SideBar;
