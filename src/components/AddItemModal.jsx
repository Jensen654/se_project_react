import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";

function AddItemModal({ isOpen, onAddItem, onCloseModal }) {
  const [garmentName, setGarmentName] = useState("");
  const [garmentImage, setGarmentImage] = useState("");
  const [weatherType, setWeatherType] = useState("");

  useEffect(() => {
    setGarmentName("");
    setGarmentImage("");
    setWeatherType("");
  }, [isOpen]);

  function handleGarmentNameChange(input) {
    setGarmentName(input);
  }

  function handleGarmentImageChange(input) {
    setGarmentImage(input);
  }

  function handleWeatherTypeChange(input) {
    setWeatherType(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ garmentName, garmentImage, weatherType });
  }

  return (
    <ModalWithForm
      buttonText="Add Garment"
      title="New Garment"
      handleCloseClick={onCloseModal}
      isOpen={isOpen}
      handleSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          onChange={handleGarmentNameChange}
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          onChange={handleGarmentImageChange}
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label_type_radio">
          <input
            onChange={handleWeatherTypeChange}
            name="weathertype"
            type="radio"
            className="modal__radio-input"
            id="hot"
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label_type_radio">
          <input
            name="weathertype"
            type="radio"
            className="modal__radio-input"
            id="warm"
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label_type_radio">
          <input
            name="weathertype"
            type="radio"
            className="modal__radio-input"
            id="cold"
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
