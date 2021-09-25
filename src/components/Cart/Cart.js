import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
        // const shipping = 20;
        const shipping = total > 0 ? 20:0;
        const tax = (total + shipping) *.01;
        const grandtotal = total + shipping + tax;
    return (
        <div>
             <h2>Order Summary:</h2>
             <h4>Items Orders: {cart.length}</h4>
             <h4>Total: {total.toFixed(2)}</h4>
             <h4>Shipping Charge: {shipping}</h4>
             <h4>Tax: {tax.toFixed(2)}</h4>
             <h4>Grand Total: {grandtotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;