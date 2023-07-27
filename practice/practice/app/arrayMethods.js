// Array Methods
// One of the most useful in React is the .map() array method.
// The .map() method allows you to run a function on each item in the array, returning a new array as the result.
// In React, map() method can be used to generate lists. 

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>);


//  Destructuring
// Destructuring makes it easy to extract only what is needed.

// Destructing Arrays
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way:
const [car1, truck1, suv1] = vehicles;
// When destructuring arrays, the order that variables are declared is important.

// Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

// Destructuring Objects
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

// Here is the new way of using an object inside a function:
const vehicle1 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2023,
    color: 'red'
}

myVehicle(vehicle1);

function myVehicle({ type, color, brand, model }) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
// the object properties do not have to be declared in a specific order.
