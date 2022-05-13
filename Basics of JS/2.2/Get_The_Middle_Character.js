function getMiddle(s)
{
  let stringLength = s.length;
  if(stringLength%2){
    return s.charAt((stringLength-1)/2);
  }
  else{
    return s.charAt((stringLength)/2-1)+s.charAt((stringLength)/2);
  }
}