
            // primitive-datatypes


let age   = 21; //number
let price = 2000; // number

console.log(age);
console.log(price);


//string
let myName      = "Tharun";
let otherMyName = 'VenkataTharun';

console.log(myName);
console.log(otherMyName);

let aboutMySelf = `Age is : ${age} My Name is ${myName} .I am working as a Developer and my Other Name is ${otherMyName}`;
console.log(aboutMySelf);


let isOnline = true;      // Boolean true

console.log(isOnline);

let isComplete = false;   // Boolean false

console.log(isComplete);



let x;
console.log(x); // undefined




function doSomething() { 
    let y;
    console.log(y); 
    return y = 20; 
}
console.log(doSomething()); //defined



let y = null;
console.log(y); // null
console.log(typeof y); 



//symbol
let symA= Symbol("desc");
console.log(symA);