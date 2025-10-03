

   // call , apply and bind



let student1 = {
  name: "J.VenkataTharun",
  location: "Andhrapradesh",
  DOB: "AUG 06, 2003",
  getDetails: function() {
    console.log(this);  
  }
};

let studentJohn = {
  name: "Mahesh",
  location: "AP",
  DOB: "AUG 05, 2001",
  fatherName: "PichiReddy",
  motherName: "Lilavathi",
  car: "Toyota"
};

let studentRobert = {
  name: "A.MallaReddy",
  location: "India",
  DOB: "OCT 25, 2001",
  fatherName: "PolthalReddy",
  motherName: "Rajeshwari",
  car: "Thar"
};

student1.getDetails.call(student1);

student1.getDetails.call(studentJohn);  

student1.getDetails.call(studentRobert);  


function globalFunction(){
  console.log(this); 
}

globalFunction(); 


let firstStudent;

firstStudent = {
  fullName: "Alice Cooper",
  grade: "A",
  getSummary: function() {
    console.log(`${this.fullName} scored grade ${this.grade}`);
  }
};

firstStudent.getSummary();
