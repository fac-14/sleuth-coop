const db = require('../db_connection');

const getAllQs = companyID => {
    const companyInfo = new Promise((resolve, reject) => {
        db.query(`SELECT * FROM companies WHERE id = ${companyID};`)
        .then(res => resolve(res))
        .catch(res => reject(res))
    });

    const questions = new Promise((resolve, reject) => {
        db.query(`SELECT * FROM questions`)
        .then(res => resolve(res))
        .catch(res => reject(res))
    })

    const answeredQuestions = new Promise((resolve, reject) => {
        db.query(`SELECT * FROM questions FULL JOIN answers ON answers.question_id = questions.id WHERE answers.company_id = ${companyID}`)
        .then(res => resolve(res))
        .catch(res => reject(res))
    })


    return Promise.all([companyInfo, questions, answeredQuestions])

}


module.exports = getAllQs;