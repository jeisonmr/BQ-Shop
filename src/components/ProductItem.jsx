import React from 'react';
import './styles/ProductItem.scss';

export const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src="https://cdn.icon-icons.com/icons2/676/PNG/512/shopping-cart_icon-icons.com_60593.png" alt="carrito" />
				</figure>
			</div>
		</div>
	);
}