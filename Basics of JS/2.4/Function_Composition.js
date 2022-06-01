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

//const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);