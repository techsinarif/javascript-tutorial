var num = [5,10,15,20,25,30,35,40];

var num1 = num.slice(); // copies the given array, does not alters the original arr: num
console.log('num', num);
console.log('num1', num1);

var numSet1 = num.slice(0,4); // Returns new array based on start and end index and it excludes the end index.
var numSet2 = num.slice(4,7); // Returns data of index values fromm 4 to 6
console.log('numSet1', numSet1);
console.log('numSet2', numSet2);

var num2 = num.slice(2); // Since no second argument, it copies the rest of the items starting from index 2
console.log('num2', num2);
var num3 = num.slice(-5); // Negative value indicates end of the index sequence. return value from 20,..
console.log('num3', num3);
var num4 = num.slice(-5, -1); // Returns 20 to 35, since it adds -1 with the second argument=> -1(given argument) + -1(internal assignment) = -2
console.log('num4', num4);