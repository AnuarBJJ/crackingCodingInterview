function howMany(num){
  if(num < 1){
    return "No solution"
  }
  if(num === 1){
    return 1;
  }
  else if (num === 2){
    return 2
  }
  else if(num === 3){
    return 4
  }

  return 3 + howMany(num-1) + howMany(num-2) + howMany(num-3);
}

console.log(howMany(5))
