const getUsers = require("./initialDBcheck");
const addUser = require("./addUser");
const getCompanyInfo = require("./getCompanyInfo");
const getSMEs = require("./getSMEs");
const getUserProfileData = require("./getUserProfileData");
const getAllQs = require("./getAllQs");

module.exports = {
  getUsers,
  addUser,
  getCompanyInfo,
  getSMEs,
  getUserProfileData,
  getAllQs
};
