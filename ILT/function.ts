interface Student{
    fname:string,
    mname?:string,
    lname:string,
    rollno: number,
    readonly percentage: number
}

function sname(s: Student){
    console.log(`First Name :${s.fname} Last Name :${s.lname} 
Roll No :${s.rollno} Percentage :${s.percentage}%`);
}
var student1:Student={
    fname:"Ameya",
    lname:"Kale",
    rollno:10,
    percentage:80,
}

sname(student1);