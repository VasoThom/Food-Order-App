import React from "react";
import classes from "./Header.module.css";
import img from "../../assets/greek.jpg";
import HeaderCartButton from "./HeaderCartButton.jsx";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Order Your Food</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="food" />
      </div>
    </>
  );
}