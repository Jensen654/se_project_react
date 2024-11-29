import "../blocks/Profile.css";
import avatar from "../images/avatar.png";
import { defaultClothingItems } from "../utils/constants";
import ItemCard from "./ItemCard";

function Profile({ handleAddItemClick, handleCardClick, itemList }) {
  return (
    <div className="profile__page">
      <div className="profile">
        <img src={avatar} alt="Profile Picture" className="profile__avatar" />
        <h2 className="profile__name">Jensen Bean</h2>
      </div>
      <div className="profile__items">
        <div className="profile__items_title">
          <h2 className="profile__items_title-text">Your Items</h2>
          <button
            onClick={handleAddItemClick}
            className="profile__items_add-item-button"
          >
            + Add New
          </button>
        </div>
        <ul className="profile__items_card-list">
          {itemList.map((item) => {
            return (
              <ItemCard
                item={item}
                key={item._id}
                handleCardClick={handleCardClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
