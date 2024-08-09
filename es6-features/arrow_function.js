// function calc() {
// 	return 5;
// };

// console.log(calc());

// const calc = (m, n) => {
// 	console.log('arrow function')
// 	return 5 * m + n;
// }
// console.log(calc(5, 3));

const person = {
	name: "Arif",
	skills: ["HTML", "CSS", "JavaScript"],

	showSkills() {
		this.skills.forEach((skill) => {
			console.log(this);
			console.log(`${this.name} is skilled in ${skill}`);
		})
	}
};

person.showSkills();
console.log(this);

