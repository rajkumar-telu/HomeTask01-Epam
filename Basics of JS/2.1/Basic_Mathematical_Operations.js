function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+": return value1 + value2;
        case "-": return value1 - value2;
        case "*": return value1 * value2;
        case "/": return value1 / value2;
        default: return "Invalid operation";
    }
}

//  return eval(value1+operation+value2);