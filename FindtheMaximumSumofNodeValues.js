/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    let sum = 0;
    let minDiff = Infinity;
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        let xorVal = nums[i] ^ k;
        sum += Math.max(nums[i], xorVal);
        if (xorVal > nums[i]) cnt++;
        minDiff = Math.min(minDiff, Math.abs(nums[i] - xorVal));
    }
    if (cnt % 2 === 1) sum -= minDiff;
    return sum;
};