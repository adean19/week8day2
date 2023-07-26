// 1. Given the data below, define a type alias for representing users.

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Sarah Stodder',
        age:99
    }
];

type Users = {
    name: string,
    age: number,
    company?: string
}

let user1: Users = {
    name: 'Nick Dean',
    age: 98,
    company: 'Google'
}
users.push(user1)
console.log(users)

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Day = {
    name: string
}

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person1 {
    constructor(
        public firstName:string, 
        public lastName:string,
        public fullName?: string) {
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = this.getFullName()
        }
    
        getFullName = (): string => {
            return `${this.firstName} ${this.lastName}`
        }
};

const user2 = new Person1('nick', 'dean')
console.log(user2.getFullName)





// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee1 extends Person1 {
    constructor(
        private salary: string
    ) {
        // @ts-ignore
        super()
            this.salary = this.offer()
    }

    offer = (): string => {
        let hourlyrate = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
        return `${hourlyrate} per hour`
    }
};

const user3 = new Employee1('Eddy', 'Gordo')
console.log(user3.offer)






// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};