import React, { useState } from 'react';

const SortFilter = ({ handleSort }) => {
  // State to keep track of the selected sort option
  const [sortOption, setSortOption] = useState('');

  // Function to handle changes in the select dropdown
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption); // Update the sortOption state
    handleSort(selectedOption);     // Call the handleSort function with the selected option
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
