import React, { useState } from 'react';
import { createPortfolio } from '../api'; // Import the createPortfolio function

const CreatePortfolio = () => {
  const [form, setForm] = useState({
    userId: '', // Assume user ID is known after registration/login
    pName: '',
    description: ''
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
      await createPortfolio(form); // Use the imported createPortfolio function
      alert('Portfolio created successfully!');
      setSubmittedData([...submittedData, form]); // Append the new entry to the list
      setForm({ pName: '', description: '' }); // Clear the form
    } catch (error) {
      alert('Portfolio creation failed!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="userId" value={form.userId} onChange={handleChange} placeholder="User ID" /> */}
        <input type="text" name="pName" value={form.pName} onChange={handleChange} placeholder="Portfolio Name" />
        <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Create Portfolio</button>
      </form>
      {submittedData.length > 0 && (
        <div>
          <h3>Submitted Portfolios:</h3>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                User ID: {data.userId}, Portfolio Name: {data.pName}, Description: {data.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreatePortfolio;
