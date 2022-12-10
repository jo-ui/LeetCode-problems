/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let max = (2 ** 31) - 1
  let min = - (2 ** 31)
  
  const isMinus = x < 0
  const str = String(Math.abs(x)).split('').reverse().join('')
  const result =  isMinus ? Number(`-${str}`) : Number(str)
  if (result > max || result < min) {
    return 0
  }
  return result;
};
