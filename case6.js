

// Function returns an array


function getSubjects()  {
    let subjectNames = ["Html" , "js" , "css"];
    return subjectNames;
}
console.log(getSubjects());
    

          
              // /functions with params and arguments.


function getAddition(param1 , param2){
    
     let firstNum  = param1;
     let secondNum = param2;

     let ouput = firstNum + secondNum;
     return ouput;
}




function MathOperations(Tharun , Mahesh)
{
    let result1 = Tharun + Mahesh
    console.log(result1);

    let result2 = Tharun - Mahesh ;
    console.log(result2);
    return [result1 , result2];
}

          // Function Calling



let result1 = MathOperations( 50 , 25);
console.log(result1);

let result2 = MathOperations(120 , 80);


console.log(result2);

//Subtraction
function getSubtraction(param1 , param2){
    
     let firstnum  = param1;
     let secondNum = param2;

     let ouput = firstnum - secondNum;
     return ouput;
}


var calData = getAddition(90,40);   // Calling the function 
console.log("First Data" , calData);


var calData1 = getAddition(200,150);   // Calling the function 
console.log("Second Data" , calData1);
