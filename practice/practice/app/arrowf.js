// Arrow functions
// Arrow functions allow us to write shorter functions
hello = function () {
    return "Hello ITC";
}

hello = () => {
    return "Hello ITC";
}

hello = () => "Hello ITC";    // use this way if there is only one statement

hello = (value) => "Hello ITC" + value;

// What About this?
// with arrow functions there is binding of 'this'
// In regular functions the "this" keyword represents the object that called the function,
// which would be the window, the document, a button etc.

// with arrow functions, the "this" keyword always represnts  the object that defined the arrow function
class Header {
    constructor() {
        this.color = "Red";
    }

    //Arrow function:
    changeColor = () => {
        document.getElementById("demo").innerHTML += this;
    }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

// Complete the array method that will allow you to run a function on each item in the array and return a new array.
const myList = myArray.map((item) => <p>{item}</p>);


// Variables
// If you use var outside of a function, it belongs to the global scope.

// If you use var inside of a function, it belongs to that function.

// If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

// var has a function scope, not a block scope.


// let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

// If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

// let has a block scope.

