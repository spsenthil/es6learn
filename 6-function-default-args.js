// jscs:disable requireTrailingComma
/**
 * @package com.servicemax.client.dispatch.impl
 * @author Prakash S
 * @copyright 2017 ServiceMax from GE Digital.
 *Created by prakash on 9/8/17.
 */


//function arguments

let a=10;

//function isEqualTo(number =10/2,compare) //calculations are possible
//function isEqualTo(number =10/2,compare=number)//overwrite number
//function isEqualTo(number =10/2,compare=a)//use a variable from outer scope.
//function isEqualTo(number =compare,compare=a)//Error argument variables will have to be declared before use.

function isEqualTo(number =10,compare){
  return number==compare;
}
//console.log(isEqualTo(10,10))
//console.log(isEqualTo(10)) //second argument is undefined