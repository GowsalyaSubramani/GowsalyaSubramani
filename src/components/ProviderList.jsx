import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProviderCard from './ProviderCard';
import ProviderDetail from './ProviderDetail';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/providers')
      .then(response => setProviders(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
  };

  const handleCloseDetail = () => {
    setSelectedProvider(null);
  };

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by ISP name, price, rating"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="provider-list">
        {filteredProviders.map(provider => (
          <ProviderCard key={provider.name} provider={provider} onSelect={handleProviderSelect} />
        ))}
      </div>
      {selectedProvider && <ProviderDetail provider={selectedProvider} onClose={handleCloseDetail} />}
    </div>
  );
};

export default ProviderList;
