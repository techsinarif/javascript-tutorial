// class keyword is used to create the class, which is nothing but the template for creating objects.
// constructor method is a initializer method in classes.
// This keyword refers to current / global / window object.
// static keyword is used to define static methods or properties with in a class,
// - static properties can not be accessed by the instances of the class.
// extends keyword is used to inherit the properties or methods from parent class.
// super keyword is used to access the properties or methods of parent class
// new keyword is used to create a new instance of an object.

class User {

  static userCounter = 0;

  constructor(name, email){
    this.name = name;
    this.email = email;
    User.userCounter++
  }

  greet(){
    console.log(`Hello ${this.name}, welcome to the channel`);
  }

  getObj(){
    return this;
  }

}

// const user1 = new User("Arif", "techsinarif@gmail.com");
// user1.greet();
// const user2 = new User("Arif2", "techsinarif2@gmail.com");
// user2.greet();
// const user3 = new User("Arif3", "techsinarif3@gmail.com");
// user3.greet();
// console.log(User.userCounter);

class Employee extends User {
  constructor(name, email, salary) {
    super(name,email);
    this.salary = salary;
  }

  getSalary() {
    console.log(`${this.name}'s salary is ${this.salary}`)
  }

  getAnnualCtc() {
    console.log(`Annual ctc for ${this.name} is ${this.salary * 12}`);
  }
}

const emp1 = new Employee("Mike", "mike@gmail.com", 5000);
emp1.greet();
emp1.getSalary();
emp1.getAnnualCtc();
