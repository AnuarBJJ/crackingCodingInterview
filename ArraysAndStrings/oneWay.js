function oneWay(s1, s2){
  if(s1.length === s2.length){
    var walker = 0;
    while(walker!== s1.length-1){
      if(s1.charAt(walker) !== s2.charAt(walker)){
        var testS1 = s2.substring(0, walker) + s1.charAt(walker) + s2.substring(walker+1, s1.length);
        if(testS1 === s1){
          return true
        } else {
          return false
        }
      }
      walker++;
    }
  } else if(s1.length -  s2.length === 1 || s2.length -  s1.length === 1) {
    var biggerStr;
    var smallerStr
    if(s1.length > s2.length){
      biggerStr = s1;
      smallerStr = s2
    }else{
      biggerStr = s2;
      smallerStr = s1
    }
    var walker = 0;

    while(walker!== s1.length-1){
      if(smallerStr.charAt(walker) !== biggerStr.charAt(walker)){
        var testS1 = smallerStr.substring(0, walker) + biggerStr.charAt(walker) + smallerStr.substring(walker, s1.length);
        if(testS1 === biggerStr){
          return true
        } else {
          return false
        }
      }
      walker++;
    }
  } else {
    return false;
  }
}
