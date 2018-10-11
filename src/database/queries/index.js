const getUsers = require("./initialDBcheck");
const addUser = require("./addUser");
const getCompanyInfo = require("./getCompanyInfo");
const getSMEs = require("./getSMEs");
const getUserProfileData = require("./getUserProfileData");

module.exports = {
  getUsers,
  addUser,
  getCompanyInfo,
  getSMEs,
  getUserProfileData
};
