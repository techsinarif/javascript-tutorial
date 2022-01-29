var numbers = [5,10,15,20,25];
var copy = [];
var string = ['John', 'Zara', 'Jacklin'];
var letters = ['a', 'b', 'c', 'b', 'a', 'd', 'e', 'a', 'd'];
var count = {};

numbers.forEach((item, index) => {
  console.log(`item is ${item} and index is ${index}`);
  copy.push(item * 2);
});

string.forEach((item, index, arr) => {
  arr[index] = 'Hello ' + item;
});

letters.forEach((item) => {
  if(count[item]){
    count[item]++
  }else{
    count[item] = 1;
  }
});

console.log('Original array:', numbers);
console.log('copy array:', copy);
console.log('String array:', string);
console.log('Count object:', count);