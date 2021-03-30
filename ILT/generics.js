var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (element) {
        this.stack.push(element);
        console.log(element + " added in stack");
    };
    Stack.prototype.pop = function () {
        var popElement = this.stack.pop();
        return popElement;
    };
    Stack.prototype.dispStack = function () {
        console.log(this.stack);
    };
    return Stack;
}());
var stackObj = new Stack();
stackObj.push(1);
stackObj.push(2);
stackObj.push(3);
stackObj.push(4);
stackObj.push(5);
console.log(stackObj.pop() + " removed from stack");
stackObj.dispStack();
console.log(stackObj.pop() + " removed from stack");
stackObj.dispStack();
console.log("------------------------------");
var stackObj1 = new Stack();
stackObj1.push('A');
stackObj1.push('B');
stackObj1.push('C');
stackObj1.push('D');
stackObj1.push('E');
console.log(stackObj1.pop() + " removed from stack");
stackObj1.dispStack();
console.log(stackObj1.pop() + " removed from stack");
stackObj1.dispStack();
