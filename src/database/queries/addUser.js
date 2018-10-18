// check that we can send a query to the test database

const db = require("../db_connection");
const getUsers = require("./initialDBcheck");
const bcrypt = require("bcryptjs");

const addUser = userObj =>

  new Promise((resolve, reject) => {

    bcrypt.hash(userObj.password, 10, (err, hash) => {
      if(err){
        reject(err);
      } else {
        db.query(
          `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`,
          [userObj.email, hash]
        )
          .then(res => {
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
            // getUsers()
          })
          .then(res => {
            resolve(res);
          })
          .catch(err => reject(err));
      }
    })
  });

module.exports = addUser;
