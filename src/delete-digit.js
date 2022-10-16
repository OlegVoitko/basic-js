const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let num1 = String(n);        
  let array = [];       
  for(let i = 0; i < num1.length; i++){                    
      (array.push(num1.slice(0,i) + num1.slice(i+1)))               
 }
 return Math.max(...array)       
}

module.exports = {
  deleteDigit
};
