const db = require("../db_connection");

const updateBasicInfo = userObj =>
  new Promise((resolve, reject) => {
    let fileExtension = `${userObj.id}-${userObj.logo_url}`;
    if (userObj.logo_url.startsWith(`${userObj.id}-`)) {
      fileExtension = userObj.logo_url;
    }
    db.query(
      `UPDATE companies SET (user_id, company_name, website, description, contact_name, contact_title, contact_email, logo_url) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE id=$9`,
      [
        userObj.user_id,
        userObj.company_name,
        userObj.website,
        userObj.description,
        userObj.contact_name,
        userObj.contact_title,
        userObj.contact_email,
        fileExtension,
        userObj.id
      ]
    )
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });

module.exports = updateBasicInfo;
