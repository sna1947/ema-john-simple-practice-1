import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(()=>{
        // fetch('./products.JSON') ***** or
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        // .then(data => console.log(data))
    .then(data =>{setProducts(data);
        setDisplayProducts(data)} )
    },[])
    // cart handel Add to cart========================
const handelAddTocart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);
        // console.log(product.name)
        // console.log('clicked')
}
// Product search field===============================
const handelSearch = event =>{
    // console.log(event.target.value);
    const searchText = event.target.value;
    const matchedProducts = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayProducts(matchedProducts);
    // console.log(matchedProducts.length)
}
    return (
        <div>
            <div className="search-container">
                <input type="text" 
                onChange={handelSearch}
                placeholder='Search Product' />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {/* <h2>Products: {products.length}</h2> */}
                    {
                        // products.map(product =>console.log(product))
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handelAddTocart={handelAddTocart} >
                        </Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
        
    );
};

export default Shop;