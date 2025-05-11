import ModalWithForm from "./ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { AuthorizationContext } from "../contexts/AuthorizationContext";

function LoginModal({ isOpen, handleCloseClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn, handleSignUpClick, buttonText, setButtonText } =
    useContext(AuthorizationContext);

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
    }).finally(() => setButtonText(""));
  }

  return (
    <ModalWithForm
      buttonText={buttonText || "Log In"}
      title="Log In"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      optionalButtonText="or Sign Up"
      optionalButtonTextFunction={handleSignUpClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Password"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
