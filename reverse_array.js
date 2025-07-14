/**
 *
 * Love Babbar DSA Sheet
 * ---------------------
 *
 * Reverse An Array
 * ----------------
 *
 **/

/**
 * 
 * Problem:
 * --------


Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements 
such that the first element becomes the last, the second element becomes second last and so on.

Examples:

Input: arr[] = {1, 4, 3, 2, 6, 5}  
Output: {5, 6, 2, 3, 4, 1}
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.


**/

/**
 * ========================================
 * [Naive Approach] Using a temporary array
 * ========================================
 */
// function reverseArray(arr) {
//   let lengthOfArray = arr.length;

//   let temp = new Array(lengthOfArray);

//   //   reverse an Array
//   for (let i = 0; i < lengthOfArray; i++) {
//     temp[i] = arr[lengthOfArray - i - 1];
//   }
//   //   copy elements back to original array
//   for (let i = 0; i < lengthOfArray; i++) {
//     arr[i] = temp[i];
//   }
// }

// const arr = [1, 4, 3, 2, 6, 5];
// reverseArray(arr);
// console.log(arr.join(" "));

/**
 * Time Complexity: O(n), copying elements to a new array is a linear operation
 * Space Complexity: O(n), as we are using an extra array to store the reversed array
 */

/**
 * ========================================
 * [Expected Approach-1] Using Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * ========================================
 *      The idea is to maintain two pointers: left and right, such that left points
 *      at the beginning of the array and right points to the end of the array.
 */

// function reverseArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr.join(" ");
// }

// const arr = [1, 4, 3, 2, 6, 5];

// console.log(reverseArray(arr));

/**
 * ==========================================
 * [Expected Approach-2] By Swapping Elements
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * ==========================================
 *      The idea is to maintain two pointers: left and right, such that left points
 *      at the beginning of the array and right points to the end of the array.
 */

function reverseArray(arr) {
  let lengthOfArray = arr.length;
  for (let i = 0; i < lengthOfArray / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[lengthOfArray - i - 1];
    arr[lengthOfArray - i - 1] = temp;
  }
  return arr.join(" ");
}

const arr = [1, 4, 3, 2, 6, 5];

console.log(reverseArray(arr));
