// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    var res=0;
    for(key in items){
      if(!pred(items[key])){  
        val = items[key]    
        items.splice(key,1) 
        items.splice(res++,0,val)
      }
    }
    return res;
  }