import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to Portfolio Management</h2>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/create-portfolio">Create Portfolio</Link></li>
          <li><Link to="/add-asset">Add Asset</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
