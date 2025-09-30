
   //  Arrow function


function PrintMessage1(){
     console.log("Hello world");
}
PrintMessage1();


var PrintMessage2 = function(){
     console.log("Hello world");
}
PrintMessage2();


var PrintMessage3 = (param1 , age)=>{
     console.log("Hello world");
     console.log(param1);
     console.log(age);
}

PrintMessage3("Javascript", "10");
   


// example 


const add = (a, b) => a + b;

console.log(add(5, 3)); 

