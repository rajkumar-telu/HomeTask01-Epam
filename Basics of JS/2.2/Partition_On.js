// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    var temp = [],temp1 = [];
    items.forEach(element => {
      if(!pred(element)){
        temp.push(element);
      }
      else{
        temp1.push(element);
      }
    });
    for(var i = 0;i<temp.length;i++){
      items[i] = temp[i];
    }
    for(var j = 0;j<temp1.length;j++){
      items[i+j] = temp1[j];
    }
    return temp.length;
    //var res = 0;
    // for(key in items){
    //   if(!pred(items[key])){  
    //     val = items[key]    
    //     items.splice(key,1) 
    //     items.splice(res++,0,val)
    //   }
    // }
    // return res;
}