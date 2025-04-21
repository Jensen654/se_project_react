import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import EditProfileModal from "./EditProfileModal";

function Profile({
  handleAddItemClick,
  handleCardClick,
  itemList,
  isOpen,
  handleCloseClick,
}) {
  return (
    <div className="profile__page">
      <SideBar />
      <ClothesSection
        itemList={itemList}
        handleCardClick={handleCardClick}
        handleAddItemClick={handleAddItemClick}
      />
      <EditProfileModal isOpen={isOpen} handleCloseClick={handleCloseClick} />
    </div>
  );
}

export default Profile;
