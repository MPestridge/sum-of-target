'use strict';

// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
// input: [1, 2, 3, 4, 5, 6, 7], 13
// output: [5,6]

let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let targetValue = 18;

const twoNumSumFinder = (arr, tar) => {
  let result = [];
  arr.forEach(function(num) {
    let solution = tar - num;
    if (arr.indexOf(solution) !== -1) {
      if (result.length < 2) {
        result.push(num);
        result.push(solution);
      } else {
        return;
      }
    } else {
      return;
    }
  });
  return result;
};

console.log(twoNumSumFinder(numsArr, targetValue));

module.exports = twoNumSumFinder;
