import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import '../../css/Product.css'

const Product = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [rating, setRating] = useState(1); // Initialize rating value

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);  // Reset after 2 seconds
    };

    return (
        <div className='Product-wrapper'>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><span>${product.price}</span></p>

            <Rating
                name="product-rating"
                value={rating}
                precision={0.5}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />

            <button onClick={handleAddToCart}>Add to cart</button>
            {isAdded && <p>Product added to cart!</p>}
        </div>
    );
}

export default Product;
