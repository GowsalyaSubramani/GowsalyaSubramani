import React from 'react';
import jsPDF from 'jspdf';

const DownloadButton = ({ provider }) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Provider: ${provider.name}`, 10, 10);
    doc.text(`Description: ${provider.description}`, 10, 20);
    doc.text(`Price: ₹${provider.lowest_price}`, 10, 30);
    doc.text(`Rating: ${provider.rating} stars`, 10, 40);
    doc.text(`Max Speed: ${provider.max_speed}`, 10, 50);
    doc.text(`Contact: ${provider.contact_no}`, 10, 60);
    doc.text(`Email: ${provider.email}`, 10, 70);
    doc.save(`${provider.name}.pdf`);
  };

  return (
    <button onClick={handleDownload}>Download PDF</button>
  );
};

export default DownloadButton;
