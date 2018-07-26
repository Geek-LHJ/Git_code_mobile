function unique(arr){
  var newArr =[];
  for(var i in arr){
    if( newArr.indexOf(arr[i]) == -1){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


unique[1, 1, 2, 2, 3, 3];
