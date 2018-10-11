/* eslint-disable */
const db = require("../src/database/db_connection");
const initialiseTestDatabase = require("../src/database/test_build");
const clearTestDatabase = require("../src/database/test_clear");
const queries = require("../src/database/queries/index");

beforeEach(() => clearTestDatabase());
beforeEach(() => initialiseTestDatabase());

afterAll(() => db.$pool.end());

describe("getting all users", () => {
  test("get all users from db", () => {
    expect.assertions(1);
    return queries.getUsers().then(res => {
      console.log(res);
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
