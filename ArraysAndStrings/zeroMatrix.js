function zeroMatrix(matrix){
  var rowsWithZero = {}
  var columnsWithZero = {}

  for(var i=0; i<matrix.length; i++){
    for(var j=0; j<matrix[i].length; j++){
      if(matrix[i][j] === 0){
        if(! (i in rowsWithZero)){
          rowsWithZero[i] = true
        }
        if(! (j in columnsWithZero)){
          columnsWithZero[j] = true
        }
      }
    }
  }

  for(var column in columnsWithZero){
    var clmn = parseInt(column)
    for(var i=0; i<matrix.length; i++){
      matrix[i][clmn] = 0
    }
  }
  for(var row in rowsWithZero){
    var r = parseInt(row)
    for(var j=0; j<matrix[0].length; j++){
      matrix[r][j] = 0
    }
  }
  return matrix
}

console.log(zeroMatrix([
  [1,2,3,4,5,0],
  [0,1,2,3,4,5],
  [1,2,3,4,5,6]
]))
