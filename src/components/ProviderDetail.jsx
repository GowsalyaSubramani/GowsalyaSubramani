import React from 'react';
import DownloadButton from './DownloadButton';
import SocialShare from './SocialShare';

const ProviderDetail = ({ provider, onClose }) => {
  return (
    <div className="provider-detail">
      <h2>{provider.name}</h2>
      <p>{provider.description}</p>
      <p>Price: ₹{provider.lowest_price}</p>
      <p>Rating: {provider.rating} stars</p>
      <p>Max Speed: {provider.max_speed}</p>
      <p>Contact: {provider.contact_no}</p>
      <p>Email: {provider.email}</p>
      <img src={provider.image} alt={provider.name} />
      <SocialShare provider={provider} />
      <DownloadButton provider={provider} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProviderDetail;
