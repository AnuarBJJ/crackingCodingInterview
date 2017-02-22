// O(NlogN) because of sorting
function checkPermutation(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }

  var str1Arr = str1.split("");
  var str2Arr = str2.split("");

  str1Arr.sort();
  str2Arr.sort();

  for(var i=0; i<str1.length; i++){
    if(str1Arr[i] !== str2Arr[i]){
      return false;
    }
  }

  return true;
}

// big O(N)
function checkPermutationFast(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  var letters = []

  // assuming that we work with ASCII
  for(var i=0; i<128; i++){
    letters[i] = 0;
  }

  for(var j=0; j<str1.length; j++){
    var letter = str1.charCodeAt(j);
    letters[letter] ++;
  }

  for(var k=0; k<str2.lenght; k++){
    var anotherLetter = str2.charCodeAt(k);
    letters[anotherLetter] --;
    if(letters[anotherLetter] < 0){
      return false;
    }
    return true;
  }
}
