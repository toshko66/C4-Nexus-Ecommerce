import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../css/Header.css'


const Header = () => {
    return (
        <header>
            <div className='Category-wrapper'>           
            <img src={require('../../Assets/Images/LOGO.png')} />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">All Products</Link></li>
                    <li><Link to="/category/electronics">Electronics</Link></li>
                    <li><Link to="/category/jewelery">Jewelery</Link></li>
                    <li><Link to="/category/men's%20clothing">Men's Clothing</Link></li>
                    <li><Link to="/category/women's%20clothing">Women's Clothing</Link></li>
                </ul>
            </nav>
            <div className='Search-wrapper'>          
                <button className='search-button'></button>
                <input type="search" placeholder="Search products..." />
                <Link to="/cart"><FaShoppingCart /></Link>
            </div>
        </header>
    );
}

export default Header;
