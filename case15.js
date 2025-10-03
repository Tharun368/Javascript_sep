var studnet = {
     sName          : "Tharun",
     dateOfbirth    : "Sep 08, 2025",
     subjects       : ["Telugu" , "Hindi" , "Maths" , "Science"],
     getStuLocatoin : function(){
                          return "Kadapa"
                      }
}

//studnet.sName;

// studnet.getStuLocatoin()



var myName = " java script ";
var stringLengn = myName.length
console.log(stringLengn);



var myName1 = "javascript";
var upperCaseMyName1 = myName.toUpperCase();
console.log(upperCaseMyName1);



var myName2 = "JAVA SCRIPT";
var lowerCaseMyName2 = myName2.toLowerCase();
console.log(lowerCaseMyName2);


var myName3 = "JavaSripT";
var lowerCaseMyName3 = myName3.toLowerCase();
console.log(lowerCaseMyName3);


var myName4 = " abc ";
var trimString1 = myName4.trim();         

var trimString2 = myName4.length;         

var trimString3 = myName4.trim().length;  
                
console.log(trimString3);



var studnetsNames = ["john" , "robert" , " Mike"];
var reverseStuentNames = studnetsNames.reverse();  

var data = reverseStuentNames[0].trim().toLowerCase();
console.log(data);

studnetsNames.concat