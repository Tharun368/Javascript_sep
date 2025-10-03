class Student
{

     TharunRollNumber  = "101";  


    constructor(){
        console.log("Constructor has executed!!!!");
        console.log("From constructor" , this. TharunRollNumber);
    }


    getEmployee(){
     console.log("Employee Name is : Tharun");
     }

    getStudent(){
        console.log(this);
        console.log("From getStudent method" ,this.TharunRollNumber );
        console.log("Student Name is : Tharun");
    }


    getJohnGrade(){
        console.log("From getGrade method" ,this.TharunRollNumber);
        return "A+";
    }


}


let student = new Student();
student.getStudent();
let jGrade = student.getJohnGrade();
document.writeln(jGrade);