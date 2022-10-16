const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let sum = 0;
  let sum2 = 0;
  n = ('' + n).split('').map(Number)     
  for(let i = 0; i < n.length; i++){
      sum = sum + n[i]                   
  }
  if(sum < 10){
      return sum
  }        
  else if(sum >= 10){
         sum = ('' + sum).split('').map(Number)            
         for(let i = 0; i < sum.length; i++){
             sum2 = sum2 + sum[i]                
         }            
      }
      return sum2                     
 }

module.exports = {
  getSumOfDigits
};
