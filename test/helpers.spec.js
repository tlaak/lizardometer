import {
  getPointerPosition,
  mapCurrencyToSymbol
} from '../src/helpers';
import expect from 'expect.js';

describe('helpers', () => {
  // Test if calculating the pointer position works correctly
  describe('calculatePointerPosition', () => {
    it('should return 0', (done) => {
      expect(getPointerPosition(0, 0, 1000)).to.equal(0);
      done();
    });

    it('should return 50', (done) => {
      expect(getPointerPosition(500, 0, 1000)).to.equal(50);
      done();
    });

    it('should return 50', (done) => {
      expect(getPointerPosition(750, 500, 1000)).to.equal(50);
      done();
    });

    it('should return 100', (done) => {
      expect(getPointerPosition(1000, 0, 1000)).to.equal(100);
      done();
    });

    // Error situation: value smaller than min
    it('should return 0', (done) => {
      expect(getPointerPosition(500, 750, 1000)).to.equal(0);
      done();
    });

    // Error situation: value larger than max
    it('should return 0', (done) => {
      expect(getPointerPosition(1000, 0, 500)).to.equal(100);
      done();
    });
  });

  // Test if mapping currency codes to symbols works correctly
  describe('mapCurrencyToSymbol', (done) => {
    it('should return $', (done) => {
      expect(mapCurrencyToSymbol('USD')).to.eql('$');
      done();
    });

    it('should return £', (done) => {
      expect(mapCurrencyToSymbol('GBP')).to.eql('£');
      done();
    });

    it('should return €', (done) => {
      expect(mapCurrencyToSymbol('EUR')).to.eql('€');
      done();
    });

    it('should return CHF', (done) => {
      expect(mapCurrencyToSymbol('CHF')).to.eql('CHF');
      done();
    });
  });
});
