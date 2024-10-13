import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  handleCloseClick,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
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
