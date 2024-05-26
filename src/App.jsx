import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProviderList from './components/ProviderList';
import ProviderDetail from './components/ProviderDetail';
import './styles.css';

const App = () => {
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [sortOrder, setSortOrder] = useState({ price: 'asc', rating: 'asc' });

  useEffect(() => {
    axios.get('http://localhost:5000/providers')
      .then(response => {
        setProviders(response.data.providers);
        setFilteredProviders(response.data.providers);
      });
  }, []);

  const handleSearch = (searchText) => {
    const lowercasedSearchText = searchText.toLowerCase();
    const filtered = providers.filter(provider =>
      provider.name.toLowerCase().includes(lowercasedSearchText) ||
      provider.lowest_price.toString().includes(lowercasedSearchText) ||
      provider.rating.toString().includes(lowercasedSearchText)
    );
    setFilteredProviders(filtered);
  };

  const handleSort = (sortBy) => {
    const sorted = [...filteredProviders].sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder.price === 'asc' ? a.lowest_price - b.lowest_price : b.lowest_price - a.lowest_price;
      } else if (sortBy === 'rating') {
        return sortOrder.rating === 'asc' ? a.rating - b.rating : b.rating - a.rating;
      }
      return 0;
    });
    setFilteredProviders(sorted);
    setSortOrder(prevState => ({
      ...prevState,
      [sortBy]: prevState[sortBy] === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleSelect = (provider) => {
    setSelectedProvider(provider);
  };

  const handleCloseDetail = () => {
    setSelectedProvider(null);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className="sort-buttons">
        <button onClick={() => handleSort('price')}>Sort by Price</button>
        <button onClick={() => handleSort('rating')}>Sort by Rating</button>
      </div>
      <ProviderList providers={filteredProviders} onSelect={handleSelect} />
      {selectedProvider && (
        <ProviderDetail provider={selectedProvider} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default App;
