import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value); // Pass the input value to the parent
  };

  return (
    <div className="search-bar">
      <h1>How can we help?</h1>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          onChange={handleInputChange} // Call the function on input change
        />
        <button>→</button>
      </div>
    </div>
  );
}

export default SearchBar;
