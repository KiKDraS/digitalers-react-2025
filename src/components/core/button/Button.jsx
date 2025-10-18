import React from "react";
import { colorMapper } from "./constants/colorMapper";

export const Button = ({ text, type = "button", color = "primary" }) => {
  return (
    <button type={type} className={`btn mt-3 ${colorMapper[color]}`}>
      {text}
    </button>
  );
};

/*
    color: "primary" | color: "secondary" | color: "danger"
*/
