interface Student{
    fname:string,
    mname?:string,
    lname:string,
    rollno: number,
    readonly percentage: number
}

var student1:Student={
    fname:"Ameya",
    lname:"Kale",
    rollno:10,
    percentage:80,
}

// student1.percentage=100;//will give error
student1.mname="Anant";

console.log(`First Name :${student1.fname} Last Name :${student1.lname} 
Roll No :${student1.rollno} Percentage :${student1.percentage} %`);
console.log(`Middle Name :${student1.mname} `);

