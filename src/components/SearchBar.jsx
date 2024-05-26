import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchText}
      onChange={handleChange}
      placeholder="Search by ISP name, price, rating"
    />
  );
};

export default SearchBar;
