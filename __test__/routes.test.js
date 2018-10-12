/* eslint-disable */

const Supertest = require('supertest');
const app = require('../src/server')

describe('GET /smes', () => {
  test('responds with json', () => 
  Supertest(app)
      .get('/smes')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
          expect(JSON.parse(response.text)[0].company_name).toBe("Senzing")
      }));
});