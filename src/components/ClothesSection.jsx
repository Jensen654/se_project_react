import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";

function ClothesSection({ itemList, handleCardClick, handleAddItemClick }) {
  const { handleCardLike, currentUser } = useContext(CurrentUserContext);

  return (
    <div className="clothes__section">
      <div className="clothes__section_title">
        <h2 className="clothes__section_title-text">Your Items</h2>
        <button
          onClick={handleAddItemClick}
          className="clothes__section_add-item-button"
        >
          + Add New
        </button>
      </div>
      <ul className="clothes__section_card-list">
        {itemList.map((item) => {
          if (item.owner === currentUser._id) {
            return (
              <ItemCard
                item={item}
                key={item._id}
                handleCardClick={handleCardClick}
                onCardLike={handleCardLike}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
