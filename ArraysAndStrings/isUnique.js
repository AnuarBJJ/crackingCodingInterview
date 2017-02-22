function isUnique(str){
  var hash = {};
  for (var i=0; i< str.length; i++){
    if(str.charAt(i) in hash){
      return false;
    } else {
      hash[str.charAt(i)] = 1;
    }
  }
  return true
}

console.log(isUnique('anuar'))
