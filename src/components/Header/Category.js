import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../Products/Product';
import Sidebar from '../Products/Sidebar';
import SortFilter from '../Sorting/SortFilter';
import '../../css/Products.css';

const Category = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products of the selected category
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [category]);

  // Update the filtered products based on user selection
  const updateFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  };

  // Handle sorting of the products
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

  return (
    <div className='Sort-container'>
      <SortFilter handleSort={handleSort} />
      <div className='Filter-container'>
        <Sidebar products={products} updateFilteredProducts={updateFilteredProducts} />
        <div className='Products-container'>
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
