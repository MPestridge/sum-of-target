'use strict';

let expect = require('chai').expect;
let vowelCounter = require('../script.js');

describe('Vowel Counter', () => {
    it('should return the total count of vowels in a given string', () => {
      let randoString = 'This is my random string.';
      let count = vowelCounter(randoString);
      expect(count).to.equal(5);
    });
});
