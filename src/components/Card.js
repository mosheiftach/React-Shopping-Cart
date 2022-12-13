import React from 'react'

const Card = ({data, addToCart}) => {
    return (
        <div className="card">
            <img src={data.image} className="card-image" alt="product" title={data.title} />
            <h3 className="card-title">{data.title.substring(0,18)+"..."}</h3>
            <p className="price">price: <span>$ {data.price}</span></p>
            <button className="add-to-cart" onClick={() => addToCart(data)}>Add to cart</button>
        </div>
    )
}

export default Card;
