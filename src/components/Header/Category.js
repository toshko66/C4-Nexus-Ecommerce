import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../Products/Product';
import '../../css/Category-container.css';

const Category = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, [category]);

    return (
        <div className='Category-container'>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Category;
