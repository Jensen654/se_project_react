import "../blocks/ItemModal.css";

function ItemModal({
  activeModal,
  selectedCard,
  handleCloseClick,
  deleteItem,
}) {
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__info">
          <p className="modal__item-name">{selectedCard.name}</p>
          <p className="modal__weather-description">
            Weather: {selectedCard.weather}
          </p>
          <button
            onClick={deleteItem(selectedCard._id)}
            className="modal__delete-button"
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
