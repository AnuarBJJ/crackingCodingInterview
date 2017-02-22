function palindromePermutation(str){
  var hash = {};
  var hashSize = 0;
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) !== " "){
      if( str.charAt(i) in hash ){
        hash[str.charAt(i)] ++;
      } else {
        hash[str.charAt(i)] = 1;
        hashSize ++
      }
    }
  }

  var odds = 0;
  for(letter in hash){
    if(hash[letter]%2 !== 0){
      odds++;
      if(odds>1){
        return false;
      }
    }
  }
  return true;
}
