import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import '../../css/Product.css';

const categoryDescriptions = {
    'electronics': 'Find a wide variety of electronics from the best brands.',
    'jewelery': 'Explore our unique and handcrafted jewelry pieces.',
    "men's clothing": 'Discover our collection of men\'s clothing including new arrivals and classic styles.',
    "women's clothing": 'Uncover the latest women\'s fashion trends!',
};

const Product = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [rating, setRating] = useState(1);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); // New state

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded); // Toggle the description
    };

    const categoryDescription = categoryDescriptions[product.category] || 'No description available';
    const displayedDescription = isDescriptionExpanded ? product.description : `${product.description.substring(0, 200)}...`; // You can adjust the substring length as needed

    return (
        <div className='Product-wrapper'>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <div className='tooltip'>
                 <p className='Product-category'>{product.category}</p>
                 <div className='tooltip-text'>{categoryDescription}</div>
            </div>  
            <p className={isDescriptionExpanded ? 'full-description' : 'short-description'}>{displayedDescription}</p>
            <button onClick={toggleDescription} className="read-more-button">{isDescriptionExpanded ? 'Read Less' : 'Read More'}</button>
            <p><span>${product.price}</span></p>

            <Rating
                name="product-rating"
                value={rating}
                precision={0.5}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />

            <button className='Add-to-cart' onClick={handleAddToCart}>Add to cart</button>
            {isAdded && <p>Product added to cart!</p>}
        </div>
    );
}

export default Product;
