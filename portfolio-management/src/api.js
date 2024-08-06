import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const createPortfolio = (portfolioData) => api.post('/portfolios', portfolioData);
export const addAsset = (assetData) => api.post('/assets', assetData);
