
    // Block scope


if (true) {
    var blockVar = "Inside block";
}
console.log(blockVar); 

if (true) {
    const blockVar = "Inside block";
}
//console.log(blockVar); // Error


//function scope

function testScope() {
    let functionVar = "Inside function";
    console.log(functionVar);
}
testScope();


[
    function testScope() {
    let functionVar = "Inside function";
} 
//console.log(functionVar); // Error
 ]




