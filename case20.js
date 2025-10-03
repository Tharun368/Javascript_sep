





function GetTarunResponse(){
   return new Promise((resolve , reject)=>{
        console.log("Kindly wait for 5 secs...for get the GeethajliBook related information");
        setTimeout(() => {
           resolve("He will come 5 secs");
        },5000);
    })
}


function GetmahiBook(){
   return new Promise((resolve , reject)=>{
        console.log("Kindly wait for 3 secs...for get the Gora related information");
        setTimeout(() => {
           resolve("He will come 9 secs.");
        },5000);  
    })
}



async function MeetUp(){
   
   let bookGeenthaliDetails = await GetmahiBook();  
   console.log(bookGeenthaliDetails);

}

MeetUp();  
console.log("CAlling his mom");
console.log("Doing some Whatsapp")