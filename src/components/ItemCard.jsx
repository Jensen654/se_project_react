import "../blocks/ItemCard.css";

function ItemCard({ item, handleCardClick }) {
  const onCardClick = () => {
    handleCardClick(item);
  };

  return (
    <li className="card">
      <p className="card__title">{item.name}</p>
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
