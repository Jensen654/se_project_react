import "../blocks/Profile.css";

function Profile() {
    return (
        <div className="profile__page">
            <div className="profile">
                <img src="" alt="" className="profile__avatar" />
                <h2 className="profile__name"></h2>
            </div>
            <div className="profile__items">
                <h2 className="profile__items_title">Your Items</h2>
                <button className="profile__items_add-item-button"></button>
                <ul className="profile__items_card-list"></ul>
            </div>
        </div>
    )
}

export default Profile;