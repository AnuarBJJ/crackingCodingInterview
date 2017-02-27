function magicNumber(arr, beg, end){
  var beg = beg ? beg : 0;
  var end = end ? end : arr.length-1;

  console.log("start " + beg)
  console.log("end " + end)

  if(end < beg){
    return -1;
  }

  var middle = beg + Math.floor((end-beg)/2);

  console.log(middle)
  if(arr[middle] === middle) {
    return middle;
  }
  else if(arr[middle] > num){
    return magicNumber(arr, beg, middle-1)
  }
  else if(arr[middle] < num){
    return magicNumber(arr, middle+1, end)
  }
}
// 1,3
//2,3
var array = [1,2,4,5,6,7,8,9,10]

var result = magicNumber(array, 3)

console.log(result)
