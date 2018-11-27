const db = require("../db_connection");

const updateAnswers = async dummyResponse => {
  const { answers, company_id: companyId } = dummyResponse;
  for (const key in answers) {
    await updateOneAnswer(key, answers[key], companyId);
  }

  // this bit is for testing purposes so we can make sure it's been updated accordingly
  const response = await db.query(
    `SELECT * FROM answers WHERE company_id = ${companyId}`
  );

  return response;
};

const updateOneAnswer = (questionId, answer, companyId) =>
  new Promise((resolve, reject) => {
    const ans = answer;

    db.query(
      `DO $$ BEGIN IF EXISTS (SELECT * FROM answers WHERE company_id=$3 AND question_id=$1) THEN UPDATE answers SET answer = $2 WHERE company_id=$3 AND question_id=$1; ELSE INSERT INTO answers (company_id, question_id, answer) VALUES ($3, $1, $2); END IF; END $$;`,
      [questionId, answer, companyId]
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

module.exports = updateAnswers;

// const dummyResponse = {
//   company_id: 1,
//   answers: {
//     0: "First answer",
//     2: "Second answer for question 2",
//     5: "Third answer for question 5"
//   }
// };
