console.log('array methods');
console.log('array methods');

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

// filter(): 

const filteredItem = products.filter((product) => {
  return product.price > 600
});
console.log(filteredItem);