import React from 'react'

const ShoppingInfo = ({totalItems,sum}) =>  {

    return (
        <div className="info">
            <div className="wrapper-info">
                    <h3>Shopping info.</h3>
                    <p>shipping value<br/> (steady up to 4 items):<span>{totalItems === 0 ? "0$" :totalItems < 4 ? " 10$" : " 20$"}</span></p>
                    <p>Number of items:<span>{" "+totalItems}</span></p>
                    <p>Total price:<span>{" "+sum.toFixed(2)+"$"}</span></p>
                    <p><b>*click on the three lines<br/> on top right in order to<br/> edit cart*</b></p>
            </div>
        </div>
    )
}

export default ShoppingInfo;
