import React, { useState } from "react";
import "../Styles/allinone.css";
import { useParams } from "react-router-dom";
import { Arrival } from "./Newarrival";
import { FaStar } from "react-icons/fa";

function SinglePage() {
  const { id } = useParams();
  const card = Arrival.find((card) => card.id == id);

  const [quantity, setQuantity] = useState(1); // Quantity state

  return (
    <div className="allinone-bottle">
      <div className="allinone-image">
        <img src={card.image} alt={card.cardTitle} />
      </div>
      <div className="allionone-title">
        <div className="allinone-cardtitile">{card.cardTitle}</div>
        <p>
          <FaStar style={{ color: "rgb(224, 150, 11)" }} />
          <FaStar style={{ color: "rgb(224, 150, 11)" }} />
          <FaStar style={{ color: "rgb(224, 150, 11)" }} />
          <FaStar style={{ color: "rgb(202, 202, 201)" }} />
          <FaStar style={{ color: "rgb(202, 202, 201)" }} /> (3) customer reviews
        </p>
        <p className="price">{card.price}</p>

        <div className="allinone-description">{card.description}</div>

        {/* Color Selection */}
        <div className="color-selection">
          <span>Color</span>
          <div className="color-option color-1 selected"></div>
          <div className="color-option color-2"></div>
          <div className="color-option color-3 disabled"></div>
          <div className="color-option color-4 disabled"></div>
        </div>

        <div className="selector-addto">
        {/* Quantity Selector */}
        <div className="quantity-container">
          <button
            className="quantity-btn"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="quantity-number">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => setQuantity((q) => q + 1)}
          >
            + 
          </button>
        </div>

        <button className="addto-cart">ADD TO CART</button>
      </div>
      <hr />
      <div className="sku">
        <p>SKU: N/A</p>
        CATEGORIES: <a href="general,sports">general,sports</a><br/>
       <a href="wish list">wish list</a>
      </div>

      </div>
    </div>
  );
}

export default SinglePage;
