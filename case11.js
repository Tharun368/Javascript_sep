//  scope

var greenColor = "Green";

//localblock-1
{
     let blueColor = "blue";
     console.log("Localblock1" , greenColor);
     console.log("Blue color is" , blueColor);
     //console.log("localblok2 is" , pinkColor);
}


//localblock-2
{
     let pinkColor = "pink"
     console.log("Localblock2" , greenColor);
}





// Global scope variable
var globalVar = "I am global";

function testScope() {
    // Function scope variable

    let functionVar = "I am inside function";

    if (true) {
        // Block scope variable

        const blockVar = "I am inside block";
        console.log(blockVar);  // Accessible here
    }

    console.log(globalVar);      // Accessible here (global)
    console.log(functionVar);    // Accessible here (function)
     
    
    
    //console.log(blockVar);    // Error: (outside block)
}

testScope();

console.log(globalVar);    // Accessible here (global)
// console.log(functionVar); // Error:  (outside function)
// console.log(blockVar);    // Error:  (outside block)
