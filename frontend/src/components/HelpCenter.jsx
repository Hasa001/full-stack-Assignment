import React, { useState } from 'react';
import SearchBar from './SearchBar';
import HelpCards from './HelpCards';

function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <HelpCards searchTerm={searchTerm} />
    </div>
  );
}

export default HelpCenter;
