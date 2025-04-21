import ModalWithForm from "./ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { AuthorizationContext } from "../contexts/AuthorizationContext";

function LoginModal({ isOpen, handleCloseClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn, handleSignUpClick } = useContext(AuthorizationContext);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSignIn({
      email: email,
      password: password,
    });
  }

  return (
    <ModalWithForm
      buttonText="Log In"
      title="Log In"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      optionalButtonText="or Sign Up"
      optionalButtonTextFunction={handleSignUpClick}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
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
        Password{" "}
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
    </ModalWithForm>
  );
}

export default LoginModal;
