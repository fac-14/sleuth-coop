/* eslint-disable */

const Supertest = require("supertest");
const app = require("../src/server");

describe("GET /smes", () => {
  test("responds with json", done => {
    Supertest(app)
      .get("/smes")
      .set("Accept", "application/json")
      .expect(200)
      .then(response => {
        expect(JSON.parse(response.text)[0].company_name).toBe("Senzing")
        done();
      })
    });   
});

describe("GET /profile/:id", () => {
  test("responds with json and correct company", done => {
    Supertest(app)
      .get("/profile/1")
      .set("Accept", "application/json")
      .expect(200)
      .then(res => {
         expect(JSON.parse(res.text)[0][0].company_name).toBe("Senzing");
         done();
      });
  });
});
