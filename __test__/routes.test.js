/* eslint-disable */

const Supertest = require("supertest");
const app = require("../src/server");

jest.setTimeout(15000);

describe("GET /smes", () => {
  test("responds with json", done => {
    Supertest(app)
      .get("/smes")
      .set("Accept", "application/json")
      .expect(200)
      .then(response => {
        expect(JSON.parse(response.text)[0].company_name).toBe("Senzing");
        done();
      });
  });
});

describe("GET /profile/:id/get", () => {
  test("responds with json and correct company", done => {
    Supertest(app)
      .get("/profile/1/get")
      .set("Accept", "application/json")
      .expect(200)
      .then(res => {
        expect(JSON.parse(res.text)[0][0].company_name).toBe("Senzing");
        done();
      });
  });
});

describe("POST /signup", () => {
  test("responds with 200", done => {
    Supertest(app)
      .post("/signup")
      .send(testState)
      .set("Accept", "application/json")
      .expect(200)
      .then(res => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

describe("POST /upload", () => {
  test("upload does something", done => {
    Supertest(app)
      .post("/upload")
      .send(testSubmit)
      .set("Accept", "application/json")
      .set("Referer", "http://localhost:3000/profile/1/add")
      .expect(200)
      .then(res => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

const testState = {
  email: "test@test.com",
  name: "testy test",
  password: "test-password",
  jobtitle: "head of test",
  company: "testytests",
  website: "tests.com",
  description: "we like tests",
  position: 5,
  errorMsg: ""
};

const testSubmit = {
  "1": [
    "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro."
  ],
  "3": ["yes"],
  "4": [
    "BOOM! Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro."
  ],
  "5": ["Staff Team", "Housing Needs"],
  "6": ["yes"],
  "7": ["Lambeth"],
  "9": ["Corporate Parent", "Care, Support and Counselling"],
  "11": ["Emma O"],
  "15": ["yes"],
  "16": ["$5 a day"],
  "17": ["yes"]
};
