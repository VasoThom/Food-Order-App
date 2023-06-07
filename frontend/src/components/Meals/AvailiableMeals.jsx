import React from "react";
import classes from "./AvailiableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Pastitsio",
    description: "Delicious...and cream...",
    price: 18.99,
  },
  {
    id: "m6",
    name: "Mousakas",
    description: "Delicious...and  greek...",
    price: 18.99,
  },
];

export default function AvailiableMeals() {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((food) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </section>
  );
}
