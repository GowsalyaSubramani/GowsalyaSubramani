import React from 'react';

const ProviderCard = ({ provider, onSelect }) => (
  <div className="provider-card" onClick={() => onSelect(provider)}>
    <img src={provider.image} alt={provider.name} />
    <h2>{provider.name}</h2>
    <p>Price: ₹{provider.lowest_price}</p>
    <p>Rating: {provider.rating} stars</p>
    <p>Speed: {provider.max_speed}</p>
    <a href={provider.url} target="_blank" rel="noopener noreferrer">Visit website</a>
  </div>
);

export default ProviderCard;
