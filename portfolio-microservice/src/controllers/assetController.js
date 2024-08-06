const dataStore = require('../models/dataStore');

exports.addAsset = (req, res) => {
  const { portfolioId, type, symbol, quantity } = req.body;
  const newAsset = { id: dataStore.assets.length + 1, portfolioId, type, symbol, quantity };
  dataStore.assets.push(newAsset);
  res.status(201).json(newAsset);
};
