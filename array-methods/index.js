
const products = [
  {productId: "RXBUH", name: "Hair Dryer", price: 2300},
  {productId: "RDQAW", name: "Trimmer", price: 1800},
  {productId: "PAWET", name: "Body spray", price: 510},
  {productId: "UKJCQ", name: "Perfume", price: 450},
  {productId: "RGWML", name: "Shoe", price: 480},
  {productId: "ZPCDW", name: "Sandal", price: 800},
  {productId: "LUKBF", name: "Running shoes", price: 975},
  {productId: "MNEAO", name: "Boots", price: 1200}
]

// Array.prototype.filter(): Creates new arry that passes the test implemented in the provided call back function. 
//  This doesn't alters the original array.

// Syntax: filter((item, index, array)=>{}, thisArg) 

const filteredItem = products.filter((product) => {
  return product.price > 600
});
console.log('Array.prototype.filter()');
console.log('filteredItem', filteredItem);
console.log('original products', products);
console.log('======================');

// Array.prototype.map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

// Syntax: map((item, index, array)=>{}, thisArg)

const updatedProductPrice = products.map((product) => {
  let products = {productId: product.productId, name: product.name, price: product.price * 2 };
  return products;
});
console.log('Array.prototype.map()');
console.log('updatedProductPrice', updatedProductPrice);
console.log('original products', products);
console.log('======================');

// Array.prototype.some(): tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
// It doesn't modify the array.

// Syntax: some((item, index, array)=>{}, thisArg)
const isPriceAboveSixHundred = products.some((product) => product.price > 600);
console.log('Array.prototype.some()');
console.log('isPriceAboveSixHundred', isPriceAboveSixHundred);
console.log('original products', products);
console.log('======================');

// Array.prototype.every(): tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
// It doesn't modify the array.

// Syntax: every((item, index, array)=>{}, thisArg)
const isPriceBelowFiveThousand = products.every((product) => product.price < 5000 );
console.log('Array.prototype.every()');
console.log('isPriceBelowFiveThousand', isPriceBelowFiveThousand);
console.log('original products', products);
console.log('======================');

// Array.prototype.reduce(): executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Syntax: reduce((accumulator, item, index, array)=>{}, initialValue)

// accumulator: required => the initial value, or the previously returned value of the function
const arr = [1,2,3,4,5];
const sum = arr.reduce((accumulator, item) => {
  console.log(accumulator);
  return accumulator + item;
});
console.log('Array.prototype.reduce()');
console.log('totalProductPrice', sum);