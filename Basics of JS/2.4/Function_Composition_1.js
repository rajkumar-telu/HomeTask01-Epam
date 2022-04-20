function compose() { //(multTwo,addOne),(5)
  
    let args = Array.from(arguments).reverse() //addOne,mulTwo
    return function (x) { //5
        for (f of args) { 
            console.log(f+" "+x)
            x = f(x) // args[f](x)
        }
        return x
    }
}

// function compose(f, g) {
//     return function (...x) {
//         return f(g(...x))
//     }
// }
// const add1 = function (a) { return a + 1 }
// const id = function (a) { return a }

