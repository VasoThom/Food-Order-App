import React from "react";
import Card from "../UI/Card.jsx";
import classes from "./AvailiableMeals.module.css";
import MealItem from "./MealItem/MealItem.jsx";

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
      <Card>
        <h1>Order Your Food</h1>

        <ul>
          {DUMMY_MEALS.map((food) => (
            <MealItem
              id={food.id}
              key={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
