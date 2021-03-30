function sum(s) {
    var sum = 0;
    for (var i = 1; i <= s; i++) {
        sum += i;
    }
    console.log(sum);
}
function allEven() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = [];
    for (var i = 0; i < args.length; i++) {
        if (args[i] % 2 == 0) {
            sum.push(args[i]);
        }
    }
    console.log(sum);
}
var student1 = {
    fname: "Ameya",
    lname: "Kale",
    rollno: 10,
    percentage: 80,
    attendence: 50
};
function sname(s) {
    if (s.attendence < 60) {
        console.log("Low Attendence");
    }
    else {
        console.log("Good,don't go below 60% Attendence");
    }
}
sum(3); //6
allEven(1, 2, 3, 4, 8); //[2,4,8]
sname(student1);
