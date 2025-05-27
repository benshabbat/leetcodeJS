/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let count = 1;
  let num1 = 0;
  let num2 = 0;
  while (count <= n) {
    if (count % m === 0) {
      num2 += count;
    } else {
      num1 += count;
    }
    count++;
  }
  return num1 - num2;
};


var differenceOfSums = function(n, m) {
    return Array.from({length: n}, (_, i) => i + 1)
        .reduce((acc, val) => val % m === 0 ? acc - val : acc + val, 0);
};