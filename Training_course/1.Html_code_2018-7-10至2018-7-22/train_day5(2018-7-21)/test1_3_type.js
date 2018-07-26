const type= (value) =>{
  let str= typeof value;
  if(str !== 'object'){
    return str;
  }else{
    if(str === null){
      return 'null';
    }
    let strArr=[Function, Date, RegExp, Error, Array];
    for(let i= 0; i<strArr.length; i++){
      if(value instanceof strArr[i]){
        return strArr[i].name.toLowerCase();
      }
    }
  }
}
console.log(type("1"));                           //object String
console.log(type(1));                             //object Number
console.log(type(NaN));                             //NaN
console.log(type(true));                          //object Boolean
console.log(type(undefined));                     //object Undefined
console.log(type(null));                          //object Null
console.log(type([1, 2]));                        //object Array
console.log(type(function(){}));                  //object Function
console.log(type({x:1,y:2}));                     //object object
console.log(type(new Date()));                    //object Date
console.log(type(/e/));                           //object RegExp
