import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import '../../css/Filters.css';

const Filters = ({ products, categories, updateFilteredProducts, isCategoryPage }) => {
    // Define initial state for filters
    const [filters, setFilters] = useState({ category: 'All', price: '' });
    
    // Predefined price ranges
    const priceRanges = ['1-25', '26-50', '51-100', '101-250', '251-500', '501-1000'];

    // Handle changes to filter values
    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // Handle form submission to apply filters
    const handleSubmit = (e) => {
        e.preventDefault();
        applyFilters();
    };

    // Reset filters to initial values
    const resetFilters = () => {
        setFilters({ category: 'All', price: '' });
        updateFilteredProducts(products);
    };

    // Apply selected filters to the products
    const applyFilters = () => {
        let priceRange = filters.price.split('-').map(Number);
        let filtered = products.filter(product =>
            (filters.category === 'All' || product.category === filters.category) &&
            (!filters.price || (product.price >= priceRange[0] && product.price <= priceRange[1]))
        );
        updateFilteredProducts(filtered);
    };

    return (
        <form onSubmit={handleSubmit} className='Form-wrapper'>
            <div className='Form-header'>
                <h2>Filters <FaFilter /></h2>
            </div>
            {/* Category filter (only if not in category page) */}
            {!isCategoryPage && <div className='Filters-wrapper'>
                <label className='Dropdown'>
                    Category:
                    <select name="category" onChange={handleChange} value={filters.category}>
                        <option value="All">All</option>
                        {categories && categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </label>
            </div>}
            {/* Price range filter */}
            <div className='Price-Range'>
                <label>
                    Price Range:
                    {priceRanges.map(range => (
                        <div key={range}>
                            <label>
                                <input type="radio" name="price" value={range} onChange={handleChange} checked={filters.price === range} /> ${range}
                            </label>
                        </div>
                    ))}
                </label>
            </div>
            {/* Apply and reset filter buttons */}
            <button className='Form-button' type="submit">Apply Filter</button>
            <button className='Form-button' type="button" onClick={resetFilters}>Reset Filters</button>
        </form>
    );
};

export default Filters;

