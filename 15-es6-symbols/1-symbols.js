//Meta Programming
//New primitive  like num.. str,
//Gives a unique id.
//Add property to objects to have unique key. symbol would be the key which will have unique value.
//Never to overrriden
//Cannot be iterated with for in key object iteration (object loop) will not show
//method to get it.






//Meta Programming
let symbol=Symbol('debuggingOnly');//no new Keyword - arg is only for Debugging.

console.log(symbol.toString());
console.log(typeof symbol);

//Uniqueness;

let symbol2=Symbol('debuggingOnly');

console.log(symbol == symbol2);//False so unique.

let obj ={
  name:'sph',
  [symbol]:22//it willnot be printed
}

console.log(obj)

console.log(obj[symbol])//prints 22

//------------


//Unique id , want to use more than once.
let sym1=Symbol.for('age')//key used to create a symbol to share same id.
let sym2=Symbol.for('age');

console.log(sym1 == sym2);//true

//When to use matters.
//func get obj adds a symbol propery,  (global registry)
let per={
  name:'Sample'
}


function makeAge(p){
  let ageSym=Symbol.for('age');
  //since this is local to this function also unique,we would not have access to it.
  //to access it further, we would need a gloabl referernce.
  p[ageSym]=27;

}

makeAge(per);

console.log(per[sym1]);











