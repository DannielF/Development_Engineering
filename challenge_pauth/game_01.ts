/**
 * Return the first subset of numbers that sums to the given number.
 * @param  {number[]} numbers - numbers[n,...]
 * @param {number} sumNumber - number to find
 * @return {number[]} subset - array of numbers
 * @function findSubset
 */

const findSubset = (numbers: number[], sumNumber: number): number[] => {
  if (numbers.length === 0) {
    return [];
  }
  let subSet: number[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == sumNumber && numbers[i] != numbers[j]) {
        subSet.push(numbers[i]);
        subSet.push(numbers[j]);
        return subSet;
      }
    }
  }
};
