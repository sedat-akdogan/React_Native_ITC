// primitive data types:
// String, number, boolean, BigInt, undefined, null

// Reference type 
// Arrays, objects, Date

let myObject = {
    fistN: "ali",
    secondN: "ahmet",
    city: "London",
    country: "The UK",
    myFunction: ()=>{console.log("i am a function")},
    address: {
        home: 29,
        street: "Causeyware",
        county: "Enfiel"
    }
}

myObject.myFunction();

let cars = [1, 3, 5, "hi", ()=>{console.log("I am also a function")}];

cars[4]();

const result = cars.map((item)=>{console.log({item})});

