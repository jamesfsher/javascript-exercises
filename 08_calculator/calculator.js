const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let result = nums.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(...nums) {
  let total = 1;
  // return nums.forEach((current) => {total *= current});
  for (let num in nums) {
    total *= nums[num];
  }
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);  
	
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  }
  else if (num == 0) {
    return 1;
  }
  else {
    let total = 1;
    while (num > 0) {
      total *= num;
      num--;
    }
    return total;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
