const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  
  names.forEach((item, index) => {
      for (let i = index + 1; i < names.length; i++) {
          if (item === names[i]) {
              names[i] += `(${getNumber(item, names.slice(index, i + 1))})`
          }
      }
  });
  return names
  //console.log(names)
}

function getNumber(item, arr) {
let name = item;
let count = 0;
while (arr.includes(name)) {
  ++count;
  name = item + `(${count})`
}
return count;
}

module.exports = {
  renameFiles
};
