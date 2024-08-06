import React, { useState } from 'react';
import { addAsset } from '../api';

const AddAsset = () => {
  const [form, setForm] = useState({
    portfolioId: '', // Assume portfolio ID is known after portfolio creation
    type: '',
    symbol: '',
    quantity: ''
  });

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
    } catch (error) {
      alert('Asset addition failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="type" value={form.type} onChange={handleChange} placeholder="Asset Type" />
      <input type="text" name="symbol" value={form.symbol} onChange={handleChange} placeholder="Symbol" />
      <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" />
      <button type="submit">Add Asset</button>
    </form>
  );
};

export default AddAsset;
