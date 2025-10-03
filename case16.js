var books     = ["javacript" , "html"];
var customers = ["Tharun" , "mallareddy"];
this.authors = "Rolling";
//console.log("Global context" , this);


var obj = {
    studentname : "Tharun",
    age         : 15,
    getStudnetdetails : function(){
       this.studenthabbits = "playing cricket";
       this.studentdob     = "12-12-2010";
       let localthis = this;
       console.log("object level context" , localthis);
      console.log(localthis.achivements);

    }
}

 obj.getStudnetdetails();


function getStudentDetails(){
   this.studentage = 10;
   this.studentname = "Tharun";
   console.log(this);   
   console.log(this.studentname);
}

getStudentDetails(); 
new getStudentDetails(); 

 var obj = {
     studentname : "Tharun",
     age         : 15,
     getStudnetdetails : () => {
        let localthis = this;
        console.log("student level context" , localthis);
        console.log(localthis.achivements);
     },
     getteacherdetails : function(){
        let localthis = this;  
        console.log("teacher level context" , localthis);
        console.log(localthis.achivements);
     }
}

obj.getStudnetdetails();
obj.getteacherdetai