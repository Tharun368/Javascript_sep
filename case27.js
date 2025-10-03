let age = 20;

let sname;
try
    {
        let uppercase = sname.toUpperCase();  
        console.log(uppercase);
    }
    catch(error){
         console.log(error);
    }
    finally{
        console.log("Finally its executed");
    }
console.log("Hey !!!! How are you ????");


// Example


try {
  let num = 5;
  num.toUpperCase(); 
} catch (e) {
  console.log("Caught a TypeError:");
  console.log("Name: " + e.name);    
  console.log("Message: " + e.message);
}

