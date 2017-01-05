'use strict';

let expect = require('chai').expect;
let twoNumSumFinder = require('../script.js');

describe('Two Number Sum Finder', () => {
    it('should return the two numbers thats sum equals the target number', () => {
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let target = 15;
      let solution = twoNumSumFinder(array, target);
      expect(solution).to.eql([5, 10]);
    });
});
