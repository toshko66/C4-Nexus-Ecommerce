import React from 'react';
import BurgerMenu from './BurgerMenu'; // Make sure to import the BurgerMenu component
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../css/Header.css';

const Header = () => {
  return (
    <header>
      <div className='Logo-wrapper'>           
        <img src={require('../../Assets/Images/LOGO.png')} alt="Logo" />
      </div>
      <BurgerMenu /> 
      <nav className="desktop-nav">
        <ul>
          <li><Link to="/">All Products</Link></li>
          <li><Link to="/category/electronics">Electronics</Link></li>
          <li><Link to="/category/jewelery">Jewelery</Link></li>
          <li><Link to="/category/men's%20clothing">Men's Clothing</Link></li>
          <li><Link to="/category/women's%20clothing">Women's Clothing</Link></li>
        </ul>
      </nav>
      <div className='Search-wrapper'>          
        <input className='Desktop-Search' type="search" placeholder="Search products..." />
        <Link to="/cart"><FaShoppingCart /></Link>
      </div>
    </header>
  );
}

export default Header;
