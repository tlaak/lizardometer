import { getData } from '../src/api';
import nock from 'nock';
import expect from 'expect.js';

describe('Api', () => {
  describe('getData', () => {
    const apiResponse = {
      'min': 383,
      'value': 761,
      'max': 897,
      'format': 'currency',
      'unit': 'GBP'
    };

    beforeEach(() => {
      nock('https://widgister.herokuapp.com')
        .get('/challenge/frontend')
        .reply(200, apiResponse);
    });

    it('should get data without errors', function(done) {
      getData()
        .then((response) => {
          expect(response).to.eql(apiResponse);
        });
      done();
    });
  });
});
