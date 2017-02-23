function isSubstring(bigger, smaller){
  for(var i=0; i<bigger.length; i++){
    if(bigger[i] === smaller[0]){
      var walkerSmall = 0
      var walkerBigger = i
      while(i<bigger.length && bigger[walkerBigger] === smaller[walkerSmall]){
        walkerSmall ++;
        walkerBigger++;
        if(walkerSmall === smaller.length){
          return true;
        }
      }
    }
  }
  return false
}

function isRotation(s1, s2){
  var s1Twice = s1.concat(s1);
  return isSubstring(s1Twice, s2);
}

console.log(isRotation("waterbottle", "erbottlewat"));
