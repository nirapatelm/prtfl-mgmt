const dataStore = require('../models/dataStore');

exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const newUser = { id: dataStore.users.length + 1, username, email, password };
  dataStore.users.push(newUser);
  res.status(201).json(newUser);
};
