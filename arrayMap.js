function hasSubarrayWithSum(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // Shrink the window from the left if the current sum exceeds the target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // Check if the current sum matches the target
    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

/*
Efficiency:
The time complexity is O(n) because each element is added and removed from currentSum at most once.
The space complexity is O(1) since we are using a constant amount of extra space.
Example:
Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
Explanation: The subarray [7, 1, 9] sums up to 17, which matches the target.
*/
