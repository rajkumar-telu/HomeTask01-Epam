function getMiddle(s)
{
  if(s.length%2){
    return s.charAt((s.length-1)/2);
  }
  else{
    return s.charAt((s.length)/2-1)+s.charAt((s.length)/2);
  }
}