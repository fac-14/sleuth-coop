/* eslint-disable */
const db = require("../src/database/db_connection");
const initialiseTestDatabase = require("../src/database/test_build");
const clearTestDatabase = require("../src/database/test_clear");
const queries = require("../src/database/queries/index");

const dummyUser = {
  email: "dummy@dummy.com",
  name: "dummy",
  jobtitle: "Head of Dummies",
  company: "Dummy Inc",
  website: "www.dummy.com",
  description:
    "We are a dedicated group of dummies finding innovative, scaleable solutions to connect dummies with dummy incorporations.",
  password: "hashedPassword123"
};

// const dummyUser2 = {
//   email: "dummy2@dummy.com",
//   name: "dummy2",
//   jobtitle: "2nd Head of Dummies",
//   company: "Dummmmy2 Inc",
//   website: "www.dummmy.com",
//   description:
//     "We are a dedicated group of dummmies finding innovative, scaleable solutions to connect dummies with dummy incorporations.",
//   password: "hashPassword123"
// };

beforeEach(() => clearTestDatabase());
beforeEach(() => initialiseTestDatabase());

afterAll(() => db.$pool.end());

describe("getting all users", () => {
  test("get all users from db", () => {
    expect.assertions(1);
    return queries.getUsers().then(res => {
      expect(res).toBeTruthy();
    });
  });
  test("returns our test user", () => {
    expect.assertions(1);
    return queries.getUsers().then(res => {
      expect(res[1].email).toBe("user@test.com");
    });
  });
});

/*
describe("Add user to database and basic info to companies table", () => {
  test("Successfully add user to users table", () => {
    expect.assertions(2);
    return queries
      .addUser(dummyUser)
      .then(() => queries.getUsers())
      .then(res => {
        expect(res.length).toBe(4);
        expect(res[3].email).toBe("dummy@dummy.com");
      });
  });

  test("Successfully add the rest of the users info to companies table", () => {
    // expect.assertions(2);
    return queries
      .addUser(dummyUser)
      .then(() => queries.getCompanyInfo(4))
      .then(res => {
        expect(res[0].company_name).toBe("Dummy Inc");
      });
  });
});
*/

test("Successfully get all SMEs for Discovery page", () => {
  return queries.getSMEs().then(res => {
    expect(res).toBeTruthy();
    expect(res[0].company_name).toBe("Senzing");
  });
});

describe("Get all profile data for specific user", () => {
  test("Successfully get user profile data", () => {
    // expect.assertions(1);
    const companyID = 1;
    return queries.getUserProfileData(companyID)
      .then(res => {
        expect(res[0][0].company_name).toBe("Senzing");
        // console.log("huh?", res[1][0]);
        expect(res[1][0].company_id).toBe(companyID);
      })
  })
})


describe("Get all questions for add content section, including answers already filled in by user", () => {
  test("Get specific company info", () => {
    const companyID = 1;
    return queries.getAllQs(companyID)
      .then(res => {
        // testing that res[0] is an array of the company's basic info
        expect(res[0][0].company_name).toBe("Senzing");
        // testing that res[1] is an array of the questions
        expect(res[1][5].question).toBeTruthy();
        // testing that res[2] is an array of answered questions for that company
        expect(res[2][0].company_id).toBe(companyID);
      })

  })
})

