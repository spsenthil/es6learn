ole.log('Hello');
}

fn(); */

/**/

//ES6
var fatArrowFn= (/*Arguements to be passed. Always provide empty paranthesis*/) =>/* */ {
	console.log('1.Hello');
  //return "2.Hello"
}

console.log(fatArrowFn());


 var oneLineFn=()=> "4.Hello";

console.log(oneLineFn());
//If multiple lines just just use th braces
var multiLineFn=()=>{

var a=2;
  var b=3;
  return "Result is:"+(a+b);
  
}

console.log(multiLineFn())//Prints 5.


//WIth Params
var multiLineFn=(a,b)=>{

  return "Result is:"+(a+b);
  
}

//Single line with expression
var simplifiedWithArgs=(a,b)=>"Result is:"+(a+b);
console.log(simplifiedWithArgs(3,7))//Prints 10.


//Only one Arg
var onlyOneArg=(a)=>"Result is:"+(a+5);
console.log(onlyOneArg(3));

var ignoredArgs=(a)=>"Result is:"+(a+5);
console.log(onlyOneArg(3,5));//5 is ignored.

//if only one arg remove paranthesis
//!!!Only case paranthesis not required !!!
var onlyOneArgNoParanthesis= a =>a+5;
console.log(onlyOneArgNoParanthesis(10))//15 printed.

setTimeout(() => console.log('Hello in timeout'),1000)


//this keyword
//root of lot of problem 
//differs in arrow functions..
//

