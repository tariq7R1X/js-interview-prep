/**
 * Given an array arr. Your task is to find the minimum and maximum elements in the array.
 * Note: Return a Pair that contains two elements the first one will be a minimum element and the second will be a maximum.
*/

// Time Complexity: O(n)
// Space Complexity: O(1)


function findMinMax(arr) {
  let lengthOfArray = arr.length;
  let maxNum = arr[0];
  let minNum = arr[0];

  if (lengthOfArray === 0) return null;
  for (let i = 1; i < lengthOfArray; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return [minNum, maxNum];
}

const arr = [3, 2, 1, 5, 10000, 167];

console.log(findMinMax(arr));
