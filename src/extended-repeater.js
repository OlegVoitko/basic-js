const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let {
    repeatTimes: repeatTimes = 1,
    separator: separator = '+',
    addition: addition = '',
    additionRepeatTimes: additionRepeatTimes = '1',
    additionSeparator: additionSeparator = '|',
  } = options;

  str = String(str);
  addition = String(addition);
  let mainStr = [];
  let addStr = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    addStr.push(addition);
  }
  for (let j = 0; j < repeatTimes; j++) {
    mainStr.push(str + addStr.join(additionSeparator))
  }
  return mainStr.join(separator) || str + addition
}

module.exports = {
  repeater
};
