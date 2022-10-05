/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result= 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]==target){
            result=i;
            break;
        }
        else
            result = -1;
    }
    return result;
};