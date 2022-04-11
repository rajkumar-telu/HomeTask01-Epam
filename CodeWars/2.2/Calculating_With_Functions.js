function zero(op) {
    if (!op) {
        return 0;
    }
    else {
        return op(0);
    }
}

function one(op) {
    if (!op) {
        return 1;
    }
    else {
        return op(1);
    }
}
function two(op) {
    if (!op) {
        return 2;
    }
    else {
        return op(2);
    }
}

function three(op) {
    if (!op) {
        return 3;
    }
    else {
        return op(3);
    }
}

function four(op) {
    if (!op) {
        return 4;
    }
    else {
        return op(4);
    }
}

function five(op) {
    if (!op) {
        return 5;
    }
    else {
        return op(5);
    }
}

function six(op) {
    if (!op) {
        return 6;
    }
    else {
        return op(6);
    }
}

function seven(op) {
    if (!op) {
        return 7;
    }
    else {
        return op(7);
    }
}

function eight(op) {
    if (!op) {
        return 8;
    }
    else {
        return op(8);
    }
}

function nine(op) {
    if (!op) {
        return 9;
    }
    else {
        return op(9);
    }
}

function plus(v1) {
    return function (v2) {
        return v1 + v2;
    }
}
function minus(v1) {
    return function (v2) {
        return v2 - v1;
    }
}
function times(v1) {
    return function (v2) {
        return v1 * v2;
    }
}
function dividedBy(v1) {
    return function (v2) {
        return Math.floor(v2 / v1);
    }
}

// var result
// var check = true
// var operand
// //zero(plus(nine()))

// function zero(arg){
//     if(check){
//     result = 0;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(0+operand+result));
//   }
// }

// function one(arg) {
//   if(check){
//     result = 1;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(1+operand+result));
//   }
// }

// function two(arg) {
//   if(check){
//     result = 2;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(2+operand+result));
//   }
// }

// function three(arg) {
//   if(check){
//     result = 3;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(3+operand+result));
//   }
// }

// function four(arg) {
//   if(check){
//     result = 4;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(4+operand+result));
//   }
// }

// function five(arg) {
//   if(check){
//     result = 5;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(5+operand+result));
//   }
// }

// function six(arg) {
//   if(check){
//     result = 6;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(6+operand+result));
//   }
// }

// function seven(arg) {
//   if(check){
//     result = 7;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(7+operand+result));
//   }
// }

// function eight(arg){
//   if(check){
//     result = 8;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(8+operand+result));
//   }
// }

// function nine(arg){
//   if(check){
//     result = 9;
//     check = false;
//   }
//   else{
//     check = true;
//     return Math.floor(eval(9+operand+result));
//   }
// }

// function plus() {
//   operand = '+';
// }
// function minus() {
//   operand = '-';
// }
// function times() {
//   operand = '*';
// }
// function dividedBy() {
//   operand = '/';
// }