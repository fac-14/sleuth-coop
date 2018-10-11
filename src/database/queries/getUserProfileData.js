const db = require("../db_connection");

const getUserProfileData = companyID => {
    const companyInfo = new Promise((resolve, reject) => {
        db.query(`SELECT * FROM companies WHERE id = ${companyID}`)
        .then(res => resolve(res));
    });

    const questionsAndAnswers = new Promise((resolve, reject) => { 
        db.query(`SELECT * FROM answers LEFT JOIN questions ON questions.id = answers.question_id WHERE answers.company_id = ${companyID}`)
        .then(res => resolve(res));
    });

    return Promise.all([companyInfo, questionsAndAnswers])
}

module.exports = getUserProfileData;


// `SELECT * FROM companies LEFT JOIN answers ON answers.company_id = companies.id WHERE companies.id = ${companyID};`