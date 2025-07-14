/**
 * Problem:
 * Given a string `str`, reverse its characters in place and return the result,
 * with each character printed on a new line.
 *
 * Naive Approach-1:
 * This function uses the two-pointer technique to reverse the string.
 * - We convert the string into an array to allow character swapping.
 * - We initialize two pointers: one starting at the beginning (left), and one at the end (right).
 * - While left < right:
 *     - Swap the characters at the left and right indices.
 *     - Move the left pointer one step to the right, and the right pointer one step to the left.
 * - Finally, we join the array into a string, using `\n` to place each character on a new line.
 *
 * Time Complexity: O(n)
 * - We go through half the string to perform swaps, which results in linear time relative to input size.
 *
 * Space Complexity: O(n)
 * - We use extra space to convert the string into an array (`.split("")`) and then again to join it (`.join()`).
 *   So even though the swap is in-place on the array, the overall space is linear due to array creation.
 */

// function reverseStr(str) {
//   let arr = str.split("");
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
//     left++;
//     right--;
//   }

//   return arr.join(" ");
// }

// const str = "tarique";
// console.log(reverseStr(str));

/**
 * Approach-2
 */

function reverseStr(str) {
  let newStr = str.split("");
  let lengthOfStr = newStr.length;

  for (let i = 0; i < lengthOfStr / 2; i++) {
    let temp = newStr[i];
    newStr[i] = newStr[lengthOfStr - i - 1];
    newStr[lengthOfStr - i - 1] = temp;
  }
  return newStr.join(" ");
}

const str = "tarique";
console.log(reverseStr(str));
