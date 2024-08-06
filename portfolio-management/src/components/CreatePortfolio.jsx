import React, { useState } from 'react';
import { createPortfolio } from '../api';

const CreatePortfolio = () => {
  const [form, setForm] = useState({
    userId: '', // Assume user ID is known after registration/login
    name: '',
    description: ''
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
      await createPortfolio(form);
      alert('Portfolio created successfully!');
    } catch (error) {
      alert('Portfolio creation failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Portfolio Name" />
      <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Create Portfolio</button>
    </form>
  );
};

export default CreatePortfolio;
