import ModalWithForm from "./ModalWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useState } from "react";

function EditProfileModal({ isOpen, handleCloseClick }) {
  const { currentUser, handleEditProfile } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAvatarUrlChange(event) {
    setAvatarUrl(event.target.value);
  }

  function editProfile(e) {
    e.preventDefault();
    handleEditProfile(name, avatarUrl);
  }

  return (
    <ModalWithForm
      buttonText="Save changes"
      title="Change profile data"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      handleSubmit={editProfile}
    >
      <label htmlFor="name" className="modal__label">
        Name*{" "}
        <input
          onChange={handleNameChange}
          type="text"
          className="modal__input"
          id="name"
          placeholder={currentUser.name}
          required
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar*{" "}
        <input
          onChange={handleAvatarUrlChange}
          type="text"
          className="modal__input"
          id="avatarUrl"
          placeholder={currentUser.avatarUrl}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
