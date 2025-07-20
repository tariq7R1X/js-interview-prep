// Sort 0s, 1s and 2s

/**

Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

You need to solve this problem without utilizing the built-in sort function.

Examples-1:

Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.


Example-2:

Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.
Follow up: Could you come up with a one-pass algorithm using only constant extra space?


 */

// using bubble sort O(n²);

// function sort012(arr) {
//   let n = arr.length;
//   if (n === 0) return null;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const arr = [0, 1, 2, 0, 1, 2];
// const sorted012 = sort012(arr);
// console.log(sorted012);

/**
 *
 * using Dutch National Flag algorithm
 * Ideal Approach (O(n), constant space:
 *
 */

function sort012(arr) {
  let n = arr.length - 1;
  let low = 0;
  let mid = 0;
  let high = n;
  if (!arr || n === 0) return [];
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

const arr = [0, 1, 2, 0, 1, 2];
const sorted012 = sort012(arr);
console.log(sorted012);
