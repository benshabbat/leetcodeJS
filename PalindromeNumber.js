/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let xArr = String(x).split("");
  let firstIndex = 0;
  let lastIndex = xArr.length - 1;

  while (firstIndex < lastIndex) {
    if (xArr[firstIndex] !== xArr[lastIndex]) return false;
    firstIndex++;
    lastIndex--;
  }
  return x;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function (x) {
  let xArr = String(x).split("");
  if (x < 0) return false;
  return x === Number(xArr.reverse().join(""));
};

console.log(isPalindrome2(121)); // true
console.log(isPalindrome2(-121)); // false
