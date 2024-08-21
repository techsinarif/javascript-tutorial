// this method sorts elements in asscending order, internally converts into string ans sorts in the format of 16-bit UTF code.

const animals = ["dog", "cat", "lion", "tiger"];

animals.sort();
console.log(animals);

const numbers = [10,40,5,3,107,45,89,0];
numbers.sort();
console.log(numbers);

const sortNumber = (a, b) => {
  // greater then 0 a comes after b
  // less then 0 a comes before b
  // if 0 || NaN considered as equal.
  return b - a
}
numbers.sort(sortNumber);

console.log(numbers);