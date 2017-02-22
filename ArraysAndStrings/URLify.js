function URLify(str){
  var strArray = str.split('')
  for(var i=0; i<strArray.length; i++){
    if(strArray[i] === " "){
      strArray[i] = "%20"
    }
  }
  return strArray.join()
}

console.log(URLify()"here we go"))
