const axios = require('axios');

const baseURL = 'https://api.github.com';

exports.searchUsers = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(`${baseURL}/search/users?q=${q}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`${baseURL}/users/${username}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserRepos = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`${baseURL}/users/${username}/repos`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
