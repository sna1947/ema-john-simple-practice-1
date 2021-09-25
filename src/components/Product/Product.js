import React from 'react';
import Rating from 'react-rating';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const {name,img,price,seller,shipping,star,starCount,stock} =props.product;
    return (

        <div className='product-cointeainer'>
            <div> 
                <img className='product-img' src={img} alt="productImage" />
            </div>
        
            <div>
                <h4 className='product-name'>Name: {name}</h4>
                <h4>Price: {price}</h4>
                <h4>Seller: {seller}</h4>
                <h4>Shipping: {shipping}</h4>
                <h4>Star Count: {starCount}</h4>
                {/* <h4>Star: {star}</h4> */}
                <p>only {stock} left in stock - order soon</p>
                <Rating 
                initialRating={star}
                emptySymbol='far fa-star'
                fullSymbol='fas fa-star'
                >
                </Rating>
                <br />
                <button 
                onClick={()=>props.handelAddTocart(props.product)}
                className='btn-regular'
                >Add to Cart</button>

            </div>
        </div>
    );
};

export default Product;