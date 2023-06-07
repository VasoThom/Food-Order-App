import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm.jsx";

import { useContext } from "react";
import CartContext from "../../../store/cart-context";

export default function MealItem({ name, description, price, id }) {
  const cartCtx = useContext(CartContext);
  const newPrice = ` €${price.toFixed(2)}  `;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3> {name}</h3>
        <div className={classes.description}> {description} </div>
        <div className={classes.price}> {price} € </div>
      </div>

      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
