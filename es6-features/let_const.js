// console.log('declared using var', x);
// var x = 20;

// console.log('declared using let', y);
// let y = 20;

// var xy = 5;
// var xy = 10;
// console.log('declared using var', xy);

// let xz = 10;
// let xz = 20;
// console.log('declared using let', xz);

// function checkVar(){
// 	if(true){
// 		var x = 10;
// 	}
// 	console.log(x)
// }
// checkVar();

// function checkLet() {
// 	let x = 10;
// 	if(true){
// 		let x = 11;
// 		console.log('inside if condition', x)
// 	}
// 	console.log('outside if condition',x)
// }
// checkLet();

function constCheck (){
	const x = 10;
	if(true){
		const x = 20;
		// x=30;
		console.log(x)
	}
	console.log(x)
};
constCheck();