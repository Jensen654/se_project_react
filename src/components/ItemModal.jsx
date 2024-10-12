import "../blocks/ItemModal.css";

function ItemModal({ activeModal, selectedCard, handleCloseClick }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
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
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
