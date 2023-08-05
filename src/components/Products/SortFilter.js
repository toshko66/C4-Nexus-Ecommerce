import React, { useState } from 'react';

const SortFilter = ({ handleSort }) => {
  const [sortOption, setSortOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    handleSort(selectedOption);
  };
  

  return (
    <div className='Sort'>
      <label>Sort By:</label>
      <select value={sortOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="alphabetical-a-z">Alphabetical A-Z</option>
        <option value="alphabetical-z-a">Alphabetical Z-A</option>
        <option value="price-ascending">Price Ascending</option>
        <option value="price-descending">Price Descending</option>
      </select>
    </div>
  );
};

export default SortFilter;
