function add(a){ //add(6)
    console.log("A:"+a+"\n");
    let res = function (b){ 
      console.log("B:"+b+"\n");
      console.log("A+B:"+(a+b)+"\n")
      return add(a+b);
    }
    
    res.valueOf = function(){
      return a;
    }
      return res;
  }
  
  console.log(add(2)(4))
  console.log(add(2)(4)(6))