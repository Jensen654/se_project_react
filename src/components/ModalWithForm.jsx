import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__content">
        <form className="modal__form">
          <p className="modal__title">{title}</p>
          <button
            onClick={handleCloseClick}
            className="modal__close-button"
            type="button"
          ></button>
          {children}
          <button className="modal__form_submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
