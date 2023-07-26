"use strict";
const nick = {
    name: 'Nick',
    age: 9001
};
const niko = {
    name: 'Niko',
    age: 9002
};
const nickero = {
    id: 1,
    name: 'Nickero',
    age: 9003
};
const nicky = {
    id: 2,
    name: 'Nicky',
    age: 9003
};
let weight = 90;
weight = '45kg';
const kgToLbs = (weight) => {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseFloat(weight) * 2.2;
    }
};
console.log((kgToLbs(117)));
console.log(kgToLbs('117kgs'));
let quantity = 100;
quantity = 100;
let quantity2 = 300;
quantity2 = 200;
let speed = undefined;
const car = {
    topSpeed: speed !== null && speed !== void 0 ? speed : 30
};
console.log(car);
const myInput = document.getElementById('myInput');
myInput.value;
