// testing

// Type Aliases: Creating our own Type
const nick: {
    name: string,
    age: number
} = {
    name: 'Nick',
    age: 9001
}

const niko: {
    name: string,
    age: number
} = {
    name: 'Niko',
    age: 9002
}

// Repeating code in lines 5-6 and 13-14. Can make a type alias (similar to class) and append to the type of your const
type Employee = {
    readonly id: number, // Can't change IDs once they've been added to a const
    name: string,
    age: number
}

const nickero: Employee = {
    id: 1,
    name: 'Nickero',
    age: 9003
}

const nicky: Employee = {
    id: 2,
    name: 'Nicky',
    age: 9003
}

// Union Types: Can allow a variable to be one of many types (number | string)
let weight: (number | string) = 90;
weight = '45kg';

// TypeScript Arrow Function; will be important for React
const kgToLbs = (weight: number | string):number => {
    if (typeof weight === 'number') { //Narrowing: building conditions for the different types of your input
        return weight * 2.2
    }
    else {
        return parseFloat(weight) * 2.2
    }
};
console.log((kgToLbs(117)))
console.log(kgToLbs('117kgs'))


// Literal Types (exact)
let quantity: 100 = 100;
quantity = 100; // Allowed because 100 is what quantity is
// quantity = 200; // Not allowed because quantity is hard set to 100

type Quantity = (100 | 200 | 300)
let quantity2: Quantity = 300;
quantity2 = 200


// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects
// FALSY VALUES IN JS: false, '', null, undefined, 0
// {}, []: Empty lusts and dictionaries are falsy in Python however in JS they are considered truthy
let speed: number | null | undefined = undefined
const car = {
    topSpeed: speed ?? 30
}
console.log(car)

// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.
// const myInput = document.getElementById('myInput') as HTMLInputElement, // can't really do this because you don't have a .html index file right now
// myInput.value



// The "unknown" type: We have to narrow down to a specific type before performing any operations
// It is preferred to use "unknown" over "any" bc it forces us to do some type checking
// Any can be used to define an object as anything; unknown is used with narrowing like below
const render = (document: unknown) => {
    if (typeof document === 'string'){
        document.slice()
    }
    else if (typeof document === 'number'){
        document.toFixed(2)
    }
    else if (document instanceof myEmployee){// narrowing to an instance of a particular class
        document.fly()
    }
    else {
        console.log('Not prepared to handle that.')
    };
}   

// typeof vs instanceof
// Types code get removed after compilation stage (So do interfaces)
class myEmployee implements Person{
    // readonly id: number; 
    // name: string;
    // age: number; //Building class with parameter properties. Can just declare in the constructorif you define public/private/protected
    location: string;
    protected hobbies: string[];
    email: string

    constructor (public readonly id: number, public name: string, public age: number, location?: string, hobbies?:string[]) {
        this.id = id
        this.name = name
        this.age = age
        this.location = location ?? '';// If location is null or undefined, set it equal to an empty string
        this.hobbies = hobbies ?? [];
        this.email = this.generateEmail()
    }
    // Public variables
    fly = () => {
        console.log('Fly :)')
    }
    // Proteced variables
    getHobbies = ():string[] => {
        for (let hobby of this.hobbies) {
            console.log(`${this.name} like ${hobby}.`)
        }
        return [...this.hobbies]
    }
    // Private Variables
    private generateEmail = (): string=>{
        return `${this.name}${this.age}@CodingTemple.com`.toLowerCase()
    }
};

const employee1 = new myEmployee(1, 'Nick', 9000)
const employee2 = new myEmployee(2, 'Paul', 9001, 'New York', ['Kayaking', 'Music'])
console.log(employee1.location)
console.log(employee2.name)

render(employee1)
render('troy')
render(3.144192714)
render(car)
const paulsHobbies = employee2.getHobbies()
paulsHobbies.push('biking')
employee2.getHobbies()
console.log(employee2.email)

// private properties and accessing them
// Access Control keywords are used in many languages, and TypeScript uses the most common three:
//  public, protected, private
// These access modifiers tell the computer what can access and modify the property/method.

// public -- this property is available  anywhere.  If no access modifier is used, the property defaults to public

// protected -- this property can be used within the class and within the derived classes, but not from outside the class

// private  -- this property can only be used from within the class that declared it.

// These access modifiers are the key to a concept known and ENCAPSULATION
// This is basically the idea of data hiding to prevent properties from being modified or used
//  by people/programs that it shouldn't be used by, or to control the modifications of these properties.
// Getters / Setters



// Building a class with parameter properties: Preferred way

// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object
// CLASS is meant to be instantiated; used to make many of. INTERFACE is not meant to be instantiated; it's just the shape of a class
interface Person {
    readonly id: number;
    name: string;
    age: number;
    location?: string;
    fly: ()=>void;
}