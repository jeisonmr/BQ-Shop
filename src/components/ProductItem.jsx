import React, { useState } from "react";
import "./styles/ProductItem.scss";

export const ProductItem = () => {
  const [cart, setCart] = useState([]);

  const carrito = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={carrito}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="carrito"
          />
        </figure>
      </div>
    </div>
  );
};
