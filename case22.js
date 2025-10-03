
// async_awit_newPromise



async function getAuthorDetails(){
    return new Promise((resolve , reject)=>{
         
          let author;
          if(author){
              resolve(author);
          }
          else{
            reject("Auhtor is undefined or null or something issue is their....");
          }
    })
}

console.log(getAuthorDetails);     

let author = getAuthorDetails();
console.log(author);   

author.then((name)=>{
     
    .0
     document.writeln(name);
}).catch(
    (rejectedMessage)=>{
    document.writeln(rejectedMessage);
})