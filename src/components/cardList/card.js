import Product from "../product/product";
import "./card.css";
import { useNavigate } from "react-router-dom";
export default function Card({ id, title, price, image, rating }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="card-container"
        onClick={() => {
          navigate(`${id}`);
        }}
      >
        <div className="card-image">
          <img alt="card" src={image} />
        </div>
        <div className="card-details">
          <p className="card-title">{title}</p>
          <h3 className="card-price">
            <span>₹</span>
            {price}
          </h3>
          <div className="review-container">
            <button className="star">{rating.rate}</button>
            <span>/{rating.count} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
