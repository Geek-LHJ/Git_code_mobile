var type= function(obj){
  var str= typeof(obj);
  if(str == "number" || "string" || "boolean" ||"undefined" || "function"){
    return str;
  }
  else if(str == "object"){
    if(obj === "null"){
      return NULL;
    }
    else{
      if((obj instanceof Array) == true){ return "Object Array" }
      if((obj instanceof Date) == true){ return "Object Date" }
      if((obj instanceof Array) == true){ return "Object function" }
      if((obj instanceof Array) == true){ return "Object Array" }
    }
  }
  else{console.log("输入的数据内省不存在！")}
}

console.log(type(1));                             //number
console.log(type("1"));                           //string
console.log(type(true));                          //boolean
console.log(type(undefined));                     //undefined
console.log(type(null));                          //null
console.log(type(function(){}));                   //function
console.log(type([1, 2]));
console.log(type(new Date()));
