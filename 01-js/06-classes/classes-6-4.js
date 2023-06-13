
class Person{
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get name(){
        return `${this.firstname} ${this.lastname}`;
    }

    set name(fullname){
        const [first,last] = fullname.split(" ");
        this.firstname = first;
        this.lastname = last;

    }
        
    }
let prs = new Person ("Clara","Mahaux");
console.log(prs.name);

let prsn = new Person("C","M")
console.log(prsn.name);
