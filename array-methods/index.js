
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

// Syntax: map((currentItem, index, array)=>{}, thisArg)

const updatedProductPrice = products.map((product) => {
  const products = {productId: product.productId, name: product.name, price: product.price * 2 };
  return products;
});
console.log('Array.prototype.map()'); 
console.log('updatedProductPrice', updatedProductPrice);
console.log('original products', products);
console.log('======================');

// Array.prototype.some(): tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
// It doesn't modify the array.

// Syntax: some((item, index, array)=>{}, thisArg);

const isPriceAboveSixHundred = products.some((product) => product.price > 600);
console.log('Array.prototype.some()');
console.log('is there any one product above 600', isPriceAboveSixHundred);
console.log('original products', products);
console.log('======================'); 

// Array.prototype.every(): tests whether all the element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
// It doesn't modify the array.

// Syntax: every((item, index, array)=>{}, thisArg)
const isPriceBelowFiveThousand = products.every((product) => product.price > 600 );
console.log('Array.prototype.every()'); 
console.log('is all products are above 600', isPriceBelowFiveThousand);
console.log('original products', products);
console.log('======================');

// Array.prototype.reduce(): executes a call back function on each element of the array, resulting in a single output value.

// Syntax: reduce((accumulator, currentItem, index, array)=>{}, initialValue)

// accumulator: required => the initial value, or the previously returned value of the function
// item: required => current item of the array.

const arr = [1,2,3,4,5];
const sum = arr.reduce((accumulator, item, index) => {                                              
  console.log(`iteration numer ${index} and the accumulator is ${accumulator}`);
  return accumulator + item;
}, 5);
console.log('Array.prototype.reduce()');
console.log('Accumulated / total: ', sum);