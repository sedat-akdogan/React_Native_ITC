// Creating an object using the Car class and creating a method named "present"
// class Car {
//     constructor(name) {
//         this.brand = name;
//     }

//     present() {
//         return "I have a " + this.brand;
//     }
// }

// const mycar = new Car("BMW");
// mycar.present();

// Creating a class named Model and will inherit the methods from the Car class:
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

const mycar = new Car("BMW", "X1");
mycar.show();

// The super() method refers to the parent class
// by calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods. 
