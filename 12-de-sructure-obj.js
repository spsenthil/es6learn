//De structure Obj

let obj={
  name:'SPH',
  age:10,
  greet:function(){
    console.log('a Function')
  }
}

//Use curly braces for objects
//let { name, age }= obj;
//console.log(name,age)

//let { name, greet } = obj;//Keys should match.
//greet();//access it here.



//If you need it as a different name - use :
let {name,greet:aFunctionAlias}=obj;

//greet() will not work.
aFunctionAlias();

//Not changing  the original object
