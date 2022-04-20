Array.prototype.sum = function(){
    return this.reduce(function(a,b) { return a+b; },0)
  }
  
  Array.prototype.square = function(){
    return this.map(function(n){ return n*n});
  }
  
  Array.prototype.cube = function(){
    return this.map(function(n){ return n*n*n});
  }
  
  Array.prototype.even = function(){
    return this.filter(function(n){ return n%2==0});
  }
  
  Array.prototype.odd = function(){
    return this.filter(function(n){ return n%2==1});
  }
  
  Array.prototype.average = function(){
    return this.sum()/this.length;
  }