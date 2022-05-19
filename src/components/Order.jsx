import React from "react";
import "./styles/Order.scss";

export const Order = () => {
  return (
    <div className="Order">
      <p>
        <sapan>03.25.21</sapan>
        <sapan>6 articles</sapan>
      </p>
      <p>$560,00</p>
      <img src="./icons/flechita.svg" alt="arrow" />
    </div>
  );
};
