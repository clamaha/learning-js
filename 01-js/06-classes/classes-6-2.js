
class Person{
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello(){
        return `Hello, ${this.firstname} ${this.lastname}!`;
    }
}
    let p = new Person("Clara","Mahaux");
    const greet = p.sayHello();  
    
console.log(greet);
