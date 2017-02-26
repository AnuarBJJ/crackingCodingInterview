function findPath(grid, node){

    var stepDown = node[0]+1;
    var stepRight = node[1]+1;

    if(stepDown < grid.length){
      if(grid[stepDown][node[1]] === grid[grid.length-1][grid[0].length-1]){
        return ['down']
      }
      if(grid[stepDown][node[1]]){
        var path = findPath(grid, [stepDown,node[1]])
        if(path.length > 0){
          path.unshift('down')
          return path
        }
      }

    }

    if(stepRight < grid[0].length){
      if(grid[node[0]][stepRight] === grid[grid.length-1][grid[0].length-1]){
        return ['right']
      }
      if(grid[node[0]][stepRight]){
        var path = findPath(grid, [node[0],stepRight])
        if(path.length > 0){
          path.unshift('right')
          return path
        }
      }
    }

    return []
}

var grid = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,2]
]

console.log(findPath(grid, [0,0]))
