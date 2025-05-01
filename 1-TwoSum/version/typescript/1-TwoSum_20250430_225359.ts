// Last updated: 4/30/2025, 10:53:59 PM
function twoSum(nums: number[], target: number): number[] {
      for(let i = 0; i < nums.length - 1; i++){
        for(let j = 1; j < nums.length; j++) {
            let sum = i !== j && nums[i] + nums[j];

            if(sum === target) {
                return [i, j]
            }
        }
      }
};