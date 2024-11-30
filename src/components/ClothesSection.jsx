import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";

function ClothesSection({ itemList, handleCardClick, handleAddItemClick }) {
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
  );
}

export default ClothesSection;
