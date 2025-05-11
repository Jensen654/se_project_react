import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { AuthorizationContext } from "../contexts/AuthorizationContext";

function RegisterModal({ isOpen, handleCloseClick }) {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegistration, handleLoginClick, buttonText, setButtonText } =
    useContext(AuthorizationContext);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatarUrl("");
  }, [isOpen]);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAvatarUrlChange(event) {
    setAvatarUrl(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration({
      name: name,
      avatar: avatarUrl,
      email: email,
      password: password,
    }).finally(() => setButtonText(""));
  }

  return (
    <ModalWithForm
      buttonText={buttonText || "Sign Up"}
      title="Sign Up"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      optionalButtonText="or Log In"
      optionalButtonTextFunction={handleLoginClick}
    >
      <label htmlFor="email" className="modal__label">
        Email*{" "}
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*{" "}
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          required
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name *{" "}
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="modal__input"
          id="name"
          placeholder="Name"
          required
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL *{" "}
        <input
          type="text"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
