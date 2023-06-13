
class Animal {
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}
class Cat extends Animal {
    constructor(name) {
            super (name);
            return ("Meow");
        }
    }

class Dog extends Animal {
    constructor(name) {
        super (name);
        return ("Woof");
    }
}
let c = new Cat("Gus");
let d = new Dog("Luna");

console.log(c.sayHello());
console.log(d.sayHello());