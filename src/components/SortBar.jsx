import React from 'react';

const SortBar = ({ sortBy, setSortBy }) => (
  <div className="sort-bar">
    <button onClick={() => setSortBy('price')}>Sort by Price</button>
    <button onClick={() => setSortBy('rating')}>Sort by Rating</button>
  </div>
);

export default SortBar;
