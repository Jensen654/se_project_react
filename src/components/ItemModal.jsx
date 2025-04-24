import { useContext } from "react";
import "../blocks/ItemModal.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  selectedCard,
  handleCloseClick,
  deleteItem,
}) {
  function handleDeleteItem() {
    const jwt = localStorage.getItem("jwt");
    deleteItem(selectedCard, jwt);
  }

  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content_type_image modal__content">
        <button
          onClick={handleCloseClick}
          className="modal__close-button"
          type="button"
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__info">
          <p className="modal__item-name">{selectedCard.name}</p>
          <p className="modal__weather-description">
            Weather: {selectedCard.weather}
          </p>
          {isOwn && (
            <button onClick={handleDeleteItem} className="modal__delete-button">
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
