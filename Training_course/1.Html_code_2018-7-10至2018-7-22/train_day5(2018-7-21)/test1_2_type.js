 const type= (value)=> {
//  var type= function(value){
    // 是否是字符串
    if(Object.prototype.toString.call(value) == "[object String]"){ return "object String";}
    // 是否是数字或NaN
    if(Object.prototype.toString.call(value) == "[object Number]"){
      if(isNaN(value)){
        return "NaN";
      }else return "object Number";
    }
    // 是否是布尔值
    if(Object.prototype.toString.call(value) == "[object Boolean]"){ return "object Boolean";}
    // 是否undefined
    if(Object.prototype.toString.call(value) == "[object Undefined]"){ return "object Undefined";}
    // 是否是null
    if(Object.prototype.toString.call(value) == "[object Null]"){ return "object Null";}
    //是否数组
    if(Object.prototype.toString.call(value) == "[object Array]"){ return "object Array";}
    // 是否是函数
    if(Object.prototype.toString.call(value) == "[object Function]"){ return "object Function";}
    // 是否是对象
    if(Object.prototype.toString.call(value) == "[object Object]"){ return "object Object";}
    // 是否是日期对象
    if(Object.prototype.toString.call(value) == "[object Date]"){ return "object Date";}
    // 是否是正则表达式
    if(Object.prototype.toString.call(value) == "[object RegExp]"){ return "object RegExp";}
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
