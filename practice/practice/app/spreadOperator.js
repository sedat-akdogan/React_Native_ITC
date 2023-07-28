// React ES6 Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const number1 = [1, 3, 5];
const number2 = [7, 9, 11];
const number12 = [...number1, ...number2];

// the spread operator is often used in combination with destructuring
// Example
// Assign the first and second items from numbers to variables and put the rest in an array:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...rest] = numbers;

// we can use the spread operator with objects too:
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicles = {...myVehicle, ...updateMyVehicle};
// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.
