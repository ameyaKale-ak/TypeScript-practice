interface Student{
    fname:string,
    mname?:string,
    lname:string,
    rollno: number,
    attendence:number,
    readonly percentage: number
}
function sum(s:number){
    let sum=0;
    for(let i=1;i<=s;i++){
        sum+=i;
    }
    console.log(sum);
}

function allEven(...args:number[]){
    let sum=[];
    for(let i=0;i<args.length;i++){
        if(args[i]%2==0){
            sum.push(args[i]);
        }
    }
    console.log(sum);
}

var student1:Student={
    fname:"Ameya",
    lname:"Kale",
    rollno:10,
    percentage:80,
    attendence:50
}

function sname(s: Student){
    if(s.attendence<60){
        console.log(`Low Attendence`);
    }
    else{
        console.log(`Good,don't go below 60% Attendence`);
    }
}

sum(3);//6
allEven(1,2,3,4,8);//[2,4,8]
sname(student1);