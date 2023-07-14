// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.greet = function(){
		console.log(`Hello, my name is ${name}, I am ${age} years old.`);
	}
}

function Employee(name, age, jobTitle) {
	this.jobTitle = jobTitle;
	this.jobGreet = function(){
        console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`)
    }
}


let p1 = new Person("pratik",22);
p1.greet();
let p2 = new Employee("teja",30,"SDE-3");
p2.__proto__ = p1;
p2.jobGreet();  
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
