function compression(str){
  var newString = ""
  for(var i=0; i<str.length; i++){
    var char = str.charAt(i);
    var counter = 1
    while(char === str.charAt(i+1)){
      counter++;
      i++;
    }
    newString += char + counter;

  }
  return newString;
}
