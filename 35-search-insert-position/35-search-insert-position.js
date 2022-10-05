/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i=0;
    let result = -1;
    while(i!=result){
          if(target>nums[i]) i++;
    else result = i
          }
    return result;
};