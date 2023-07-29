import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import Filter from './Filters';
import SortFilter from './SortFilter';
import '../../css/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showPerPage, setShowPerPage] = useState(9); // Number of products shown per page

    useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            setProducts(response.data);
            setFilteredProducts(response.data.slice(0, showPerPage));
            // Set unique categories from the fetched products
            const uniqueCategories = [...new Set(response.data.map(product => product.category))];
            setCategories(uniqueCategories);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, [showPerPage]);

    const loadMore = () => {
        setShowPerPage(prevPerPage => prevPerPage + 9); // Increase the number of products shown per page
    };;

    const updateFilteredProducts = (filtered) => {
        setFilteredProducts(filtered);
    };

    const handleSort = (option) => {
        let sortedProducts = [...filteredProducts];
    
        switch (option) {
            case 'alphabetical-a-z':
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
            case 'alphabetical-z-a':
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
            case 'price-ascending':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
            case 'price-descending':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
            default:
            break;
        }
    
        setFilteredProducts(sortedProducts);
    };

    const productCounter = () => {
        return `Showing ${filteredProducts.length} out of ${products.length}`;

    };


    return (
        <div className='Sort-container'>
            <SortFilter handleSort={handleSort} />
            <div className='Filter-container'>
                <Filter products={products} categories={categories} updateFilteredProducts={updateFilteredProducts} />
                <div className='Products-container'>
                    {filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
            {/* Add product counter display */}
            <div id="product-counter">
                {productCounter()}
            </div>
            {products.length > showPerPage ? (
                <button className="load-more-button" onClick={loadMore}>
                    Load More
                </button>
            ) : (
                <p className='bottom-message'>All products have been loaded.</p>
            )}
        </div>
    );
}

export default Products;