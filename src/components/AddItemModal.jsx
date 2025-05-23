import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { AuthorizationContext } from "../contexts/AuthorizationContext";

function AddItemModal({ isOpen, onAddItem, onCloseModal }) {
  const [garmentName, setGarmentName] = useState("");
  const [garmentImage, setGarmentImage] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const { buttonText, setButtonText } = useContext(AuthorizationContext);

  useEffect(() => {
    setGarmentName("");
    setGarmentImage("");
    setWeatherType("");
  }, [isOpen]);

  function handleGarmentNameChange(event) {
    setGarmentName(event.target.value);
  }

  function handleGarmentImageChange(event) {
    setGarmentImage(event.target.value);
  }

  function handleWeatherTypeChange(event) {
    setWeatherType(event.target.id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({
      _id: Math.random(),
      name: garmentName,
      imageUrl: garmentImage,
      weather: weatherType,
    }).finally(() => setButtonText(""));
  }

  return (
    <ModalWithForm
      buttonText={buttonText || "Add Garment"}
      title="New Garment"
      handleCloseClick={onCloseModal}
      isOpen={isOpen}
      handleSubmit={handleSubmit}
    >
      <label htmlFor="item-name" className="modal__label">
        Name{" "}
        <input
          value={garmentName}
          onChange={handleGarmentNameChange}
          type="text"
          className="modal__input"
          id="item-name"
          placeholder="Name"
          required
        />
      </label>
      <label htmlFor="item-imageUrl" className="modal__label">
        Image{" "}
        <input
          value={garmentImage}
          onChange={handleGarmentImageChange}
          type="url"
          className="modal__input"
          id="item-imageUrl"
          placeholder="Image URL"
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label_type_radio">
          <input
            checked={weatherType === "hot"}
            onChange={handleWeatherTypeChange}
            name="weathertype"
            type="radio"
            className="modal__radio-input"
            id="hot"
            required
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label_type_radio">
          <input
            checked={weatherType === "warm"}
            onChange={handleWeatherTypeChange}
            name="weathertype"
            type="radio"
            className="modal__radio-input"
            id="warm"
            required
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label_type_radio">
          <input
            checked={weatherType === "cold"}
            onChange={handleWeatherTypeChange}
            name="weathertype"
            type="radio"
            className="modal__radio-input"
            id="cold"
            required
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
