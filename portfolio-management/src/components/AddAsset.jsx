import React, { useState } from 'react';
import { addAsset } from '../api'; // Import your addAsset function

const AddAsset = () => {
  const [form, setForm] = useState({
    portfolioId: '', // Assume portfolio ID is known after portfolio creation
    type: '',
    symbol: '',
    quantity: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAsset(form);
      alert('Asset added successfully!');
      setSubmittedData([...submittedData, form]); // Append the new entry to the list
      setForm({ portfolioId: '', type: '', symbol: '', quantity: '' }); // Clear the form
    } catch (error) {
      alert('Asset addition failed!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" value={form.type} onChange={handleChange} placeholder="Asset Type" />
        <input type="text" name="symbol" value={form.symbol} onChange={handleChange} placeholder="Symbol" />
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" />
        <button type="submit">Add Asset</button>
      </form>
      {submittedData.length > 0 && (
        <div>
          <h3>Submitted Assets:</h3>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                Type: {data.type}, Symbol: {data.symbol}, Quantity: {data.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddAsset;
