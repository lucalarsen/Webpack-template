interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);


// simple class
class GreeterClass {
    greeting: string;
    constructor(message:string) {
        this.greeting = message;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeterClass = new GreeterClass("world");

// ////med public values som default
// // base class
// class Animal {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     move(distanceInMeters: number = 0){
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// // arver fra animal
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// // arver fra animal
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

// // class med protected og private values
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

// // nu med protected constructor
// class Person {
//     protected name: string;
//     protected constructor(theName: string) { this.name = theName; }
// }

// // Employee can extend Person
// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // Error: The 'Person' constructor is protected