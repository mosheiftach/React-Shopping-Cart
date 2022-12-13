import React from 'react'

const CartItem = ({product, changeQuantity}) => {
    return (
        <div className="cart-item">
            <img src={product.image} alt="cart-item" className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">{product.title.substring(0,18)+"..."}</p>
                    <span className="cart-item-price">$ {product.price}</span>
                </div>
                <div>
                    <p className="item-quantity">Quantity: <span>{product.quantity}</span></p>
                    <div>
                     <button className="quantity-btn" onClick={() => changeQuantity(product, '-')}>-</button>
                     <button className="quantity-btn" onClick={() => changeQuantity(product, '+')}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
