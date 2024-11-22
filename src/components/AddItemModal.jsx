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

  return <ModalWithForm />;
}
