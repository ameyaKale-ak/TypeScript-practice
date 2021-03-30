class Stack <T>{
    stack:T[];

constructor (){
    this.stack=[];
}

push(element : T):void{
this.stack.push(element);
console.log(`${element} added in stack`)
}

pop() : T{
let popElement=this.stack.pop();
return popElement;
}

dispStack() :void{
    console.log(this.stack);
}

}
let stackObj=new Stack<number>();
stackObj.push(1);
stackObj.push(2);
stackObj.push(3);
stackObj.push(4);
stackObj.push(5);
console.log(`${stackObj.pop()} removed from stack`);
stackObj.dispStack();
console.log(`${stackObj.pop()} removed from stack`);
stackObj.dispStack();

console.log(`------------------------------`);

let stackObj1=new Stack<string>();
stackObj1.push('A');
stackObj1.push('B');
stackObj1.push('C');
stackObj1.push('D');
stackObj1.push('E');
console.log(`${stackObj1.pop()} removed from stack`);
stackObj1.dispStack();
console.log(`${stackObj1.pop()} removed from stack`);
stackObj1.dispStack();