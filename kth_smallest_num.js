/**

Given an array arr[] and an integer k where k is smaller than the size of the
array, your task is to find the kth smallest element in the given array.

Follow up: Don't solve it using the inbuilt sort function.



Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
Output: 7
Explanation: 3rd smallest element in the given array is 7.



Input: arr[] = [2, 3, 1, 20, 15], k = 4 
Output: 15
Explanation: 4th smallest element in the given array is 15.


*/

function findKthSmallestNum(arr, k) {
  if (arr.length === 0 || k < 1 || k > arr.length) return null;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr[k - 1];
}

let k = 3;
const arr = [7, 10, 4, 3, 20, 15];
let kthElement = findKthSmallestNum(arr, k);
console.log(kthElement);
