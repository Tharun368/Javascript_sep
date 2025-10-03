
//Logical_operators


console.log((1 == 1) || (2 == 2));  
console.log((1 == 1) || (2 == 3));  
console.log((1 == 2) || (2 == 2));  
console.log((1 == 2) || (2 == 3));  


if((1 == 2) || (2 == 2)){
     console.log("Yes");
}
else{
    console.log("No");
}




let amount = 500;
let HavingTime = "Yes";

if(amount == 500 || HavingTime == "Yes"){
    console.log("lets go for shopping");
}
else{
    console.log("I'M going to my friend marriage ");
}




// examples  



let age = 20;
let hasTicket = true;
let isMember = false;

// Logical AND (&&)
if (age > 18 && hasTicket) {
  console.log("Allowed entry with a ticket and over 18.");
} 
else {
  console.log("Not allowed entry (AND condition failed).");
}

// Logical OR (||)
if (isMember || hasTicket) {
  console.log("Allowed entry (either member or has ticket).");
} 
else {
  console.log("Not allowed entry (OR condition failed).");
}

// Logical NOT (!)
if (!isMember) {
  console.log("Not a member.");
} 
else {
  console.log("Is a member.");
}
