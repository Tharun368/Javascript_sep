async function getAuthorDetails(){
    return "Arudanrhi rai";  
}

console.log(getAuthorDetails);     

let author = getAuthorDetails();

author.then((authorname)=>{
     //console.log(authorname);
     document.writeln(authorname);
})



console.log(author);


async function fetchData() {
  try {
    let response = await fetch("https://raw.githubusercontent.com/Tharun368/Javascript_sep/main/data.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();


fetchData();