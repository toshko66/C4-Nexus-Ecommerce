import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../css/BurgereMenu.css';

const BurgerMenu = () => {
  // State for managing the burger menu open state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="burger-menu">
        {/* Checkbox input to toggle menu */}
        <input id="burger" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        
        {/* Label to style the burger icon */}
        <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        
        {/* Navigation menu */}
        <nav className={isOpen ? 'open' : ''}>
            <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>All Products</Link></li>
            <li><Link to="/category/electronics" onClick={() => setIsOpen(false)}>Electronics</Link></li>
            <li><Link to="/category/jewelery" onClick={() => setIsOpen(false)}>Jewelery</Link></li>
            <li><Link to="/category/men's%20clothing" onClick={() => setIsOpen(false)}>Men's Clothing</Link></li>
            <li><Link to="/category/women's%20clothing" onClick={() => setIsOpen(false)}>Women's Clothing</Link></li>
            </ul>

            {/* Search input and cart link for mobile view */}
            <div className='Search-wrapper-mobile'>
            <input className='Mobile-Search' type="search" placeholder="Search products..." />
            <Link id='Cart' to="/cart"><FaShoppingCart /></Link>
            </div>
        </nav>
        </div>
    );
};

export default BurgerMenu;
