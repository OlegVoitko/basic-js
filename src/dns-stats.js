const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {};  
  let domainsSplit = domains.map((el) => el.split(".").reverse());
  for(let i = 0; i < domainsSplit.length; i++){    
      for(let j = 1; j < domainsSplit[i].length + 1; j++){
          const item = domainsSplit[i].slice(0, j).join(".");
          if (obj[`.${item}`] === undefined) {
              obj[`.${item}`] = 1;
          } else {
              obj[`.${item}`]++;
          }
      }
  }
  return (obj)
}

module.exports = {
  getDNSStats
};
