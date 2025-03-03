const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(a) {
  // let sum=0;
  // for(let i=0;i<a.length;i++)
  // {
  //   sum+=a[i];
  // }
  // return sum;

  return a.reduce((total,currentItem)=>total+currentItem,0);

};

const multiply = function(a) {
  // let prod=1;
  // for(let i=0;i<a.length;i++)
  // {
  //   prod*=a[i];
  // }

  // return prod;

  return a.reduce((product,currentItem)=>product*currentItem);
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(a) {
  let fact=1
  for(let i=1;i<=a;i++)
  {
      fact*=i;
  }
	return fact;
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
