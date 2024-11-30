import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

function Profile({ handleAddItemClick, handleCardClick, itemList }) {
  return (
    <div className="profile__page">
      <SideBar />
      <ClothesSection
        itemList={itemList}
        handleCardClick={handleCardClick}
        handleAddItemClick={handleAddItemClick}
      />
    </div>
  );
}

export default Profile;
