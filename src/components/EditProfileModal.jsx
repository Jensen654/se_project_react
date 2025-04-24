import ModalWithForm from "./ModalWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useState } from "react";

function EditProfileModal({ isOpen, handleCloseClick }) {
  const { currentUser, handleEditProfile } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatarUrl);

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
      <label htmlFor="edit-name" className="modal__label">
        Name*{" "}
        <input
          onChange={handleNameChange}
          type="text"
          className="modal__input"
          id="edit-name"
          placeholder="Name"
          value={name}
          required
        />
      </label>
      <label htmlFor="edit-avatarUrl" className="modal__label">
        Avatar*{" "}
        <input
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
          type="text"
          className="modal__input"
          id="edit-avatarUrl"
          placeholder="Image URL"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
