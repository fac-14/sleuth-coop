// check that we can send a query to the test database

const db = require("../db_connection");
const getUsers = require("./initialDBcheck");

const addUser = userObj =>
  new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`,
      [userObj.email, userObj.password]
    )
      .then(res => {
        console.log("user table sucessfully updated")
        const userId = res[0].id;
        db.query(
          `INSERT INTO companies (user_id, company_name, website, description, contact_name, contact_title, contact_email, logo_url) VALUES ($1, $2, $3, $4, $5, $6, $7, NULL)`,
          [
            userId,
            userObj.company,
            userObj.website,
            userObj.description,
            userObj.name,
            userObj.jobtitle,
            userObj.email
          ]
        );
      })
      .then(() => {
        console.log("company table sucessfully updated")
        // getUsers()
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });

module.exports = addUser;
