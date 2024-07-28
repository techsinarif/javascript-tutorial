const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  console.log(x);
}

/* Expected output: 
    [0, "Banana"]
    [1, "Orange"]
    [2, "Apple"]
    [3, "Mango"]
*/

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'