// Last updated: 5/3/2025, 7:11:47 PM
// Binary search O(n)
function search(nums: number[], target: number): number {
  let point1 = 0;
  let point2 = nums.length - 1;

  // handle if nums.length === 1
  if(nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  while(point1 <= point2) {
    if(nums[point1] === target){
      return point1;
    }    
    else if(nums[point2] === target) {
      return point2;
    }
    else {
      point1++;
      point2--;
    }
  }

  return -1;
};