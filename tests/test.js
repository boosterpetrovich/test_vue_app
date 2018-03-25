const request = require('supertest');
const app = 'http://cashier.boosterpetrovich.com';

describe('GET /home', function() {
  it('respond with json', function() {
    return request(app)
      .get('/home')
      .expect(200)
      .then(response => {

      })
    //   .end( function(err))
  });
});
