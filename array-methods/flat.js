
const arr1 = [0, 1, 2, [3, 4]];
console.log('arr1', arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log('arr2', arr2.flat());
// Expected output: Array [0, 1, 2, Array [3, 4]]

const arr3 = [1, 2, [3, 4]];
console.log('arr3', arr3.flat());
// [1, 2, 3, 4]

const arr4 = [1, 2, [3, 4, [5, 6]]];
console.log('arr4',arr4.flat());
// [1, 2, 3, 4, [5, 6]]

const arr5 = [1, 2, [3, 4, [5, 6]]];
console.log('arr5', arr5.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr6 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log('arr6', arr6.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]