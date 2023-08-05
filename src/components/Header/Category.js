import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../Products/Product';
import Products from '../Products/Products';
import Filters from '../Products/Filters';  
import '../../css/Category-container.css';
import SortFilter from '../Products/SortFilter';

const Category = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, [category]);

    const updateFilteredProducts = (filtered) => {
        setFilteredProducts(filtered);
    };

    return (
        <div className='Category-container'>
            <Filters 
              products={products} 
              updateFilteredProducts={updateFilteredProducts} 
              isCategoryPage={true} 
            />
            <SortFilter/>
            {filteredProducts.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default Category;
