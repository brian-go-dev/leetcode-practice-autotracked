// Last updated: 5/4/2025, 12:22:37 AM
// binary search
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}
