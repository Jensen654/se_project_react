import "../blocks/ItemCard.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ item, handleCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const onCardClick = () => {
    handleCardClick(item);
  };

  const handleLike = () => {
    const itemId = item._id;
    const isLiked = item.likes.includes(currentUser._id);
    onCardLike({ id: itemId, isLiked });
  };

  return (
    <li className="card">
      <div className="card__title">
        <p className="card__title_text">{item.name}</p>
        {currentUser.name &&
          (item.likes.includes(currentUser._id) ? (
            <button
              onClick={handleLike}
              type="button"
              className="card__liked"
            ></button>
          ) : (
            <button
              onClick={handleLike}
              type="button"
              className="card__not-liked"
            ></button>
          ))}
      </div>
      <img
        onClick={onCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
