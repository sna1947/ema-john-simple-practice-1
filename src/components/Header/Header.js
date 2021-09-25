import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
          <img className='logo' src={logo} alt="logo" />
          <nav>
              <a href="/Home">Home</a>
              <a href="/Shop">Shop</a>
              <a href="Orders">Order review</a>
              <a href="Inventory">Manage Inventory</a>
          </nav>
        </div>
    );
};

export default Header;