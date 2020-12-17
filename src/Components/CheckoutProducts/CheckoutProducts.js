import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "../../StateProvider/StateProvider";

function CheckoutProducts({ id, image, title, price, rating, hideButton }) {
  // eslint-disable-next-line no-unused-vars
  const [basket, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //Removes items from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="unique" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="Snowman">
                🌟
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProducts;
