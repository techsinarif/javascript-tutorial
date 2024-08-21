// Syntax
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

const months = ["Jan", "March", "June"];

months.splice(1, 0, "Feb");
console.log(months);

months.splice(2, 1, "April", "May");

console.log(months);
