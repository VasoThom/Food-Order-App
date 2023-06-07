import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} id={input.id} />
    </div>
  );
});

export default Input;
