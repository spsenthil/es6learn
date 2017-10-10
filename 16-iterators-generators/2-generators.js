// jscs:disable requireTrailingComma
/**
 * Dispatch Console
 * @package com.servicemax.client.dispatch.impl
 * @author Prakash S
 * @copyright 2017 ServiceMax from GE Digital.
 *Created by prakash on 9/10/17.
 */


//Generators
//normal function


/*Generator syntax*/
function  * select(){

 /*Important keyword*/ yield 'House';
  yield 'Garage';

}

//select() - gies nothing

//Iterate through an object by yielding a value.
let it = select(); //actually u get an iterator
console.log(it.next());
console.log(it.next());
console.log(it.next());





// --------- ----



//Generators
//normal function
let obj={

  [Symbol.iterator]:gen
}

/*Generator syntax*/
function  * gen(){

  yield 1;
  yield 2;//get a  value from serve and yield the value.

}

//nothing actually u get a iterator
for(let el of obj){
  console.log(el)
}

//---------- Passign arguemtns to Generators

//Generators
//normal function

/*Generator syntax*/
function  * gen(end){

  for(var i=0;i<end;i++){
    yield i;
  }

}


let it=gen(2);
console.log(it.next());
console.log(it.next());
console.log(it.next());


// -- More methods of iterator

function  * gen(end){

  for(var i=0;i<end;i++){
    yield i;
  }

}

console.log(it.next());
console.log(it.throw('An Error Occured'));//Breaks here..
console.log(it.next());
console.log(it.next());


/------------ --/

//console.log(it.throw()); //Throws the error
//console.log(it.throw('An Error Occured')); //Throws the error with message



function  * gen(end){

  for(var i=0;i<end;i++){

    try {
      yield i;
    }catch(err){//make sure the generator continues in case of error
      console.log(err);//just catch the error.
    }
  }

}

console.log(it.next());
console.log(it.throw('An Error Occured'));
console.log(it.next());
console.log(it.next());




console.log(it.next());
console.log(it.return('An Error Occured'));//Overwrites a value
console.log(it.next());
console.log(it.next());

