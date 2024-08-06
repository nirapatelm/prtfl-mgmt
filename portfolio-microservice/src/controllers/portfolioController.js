const dataStore = require('../models/dataStore');

exports.createPortfolio = (req, res) => {
  const { userId, name, description } = req.body;
  const newPortfolio = { id: dataStore.portfolios.length + 1, userId, name, description };
  dataStore.portfolios.push(newPortfolio);
  res.status(201).json(newPortfolio);
};