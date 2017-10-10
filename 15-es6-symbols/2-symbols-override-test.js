
//Unique id , want to use more than once.
let sym1=Symbol.for('age')//key used to create a symbol to share same id.
let sym2=Symbol.for('age');

//When to use matters.
//func get obj adds a symbol propery,  (global registry)
let per={
  name:'Sample',
  age:27
}


function makeAge(p){
  let ageSym=Symbol.for('age');
  //since this is local to this function also unique,we would not have access to it.
  //to access it further, we would need a gloabl referernce.
  p[ageSym]=27;

}

makeAge(per);

console.log("Symbol property key:"+per[sym1]);
//So we confirm that we do not overwrite.
console.log("Object property Key array notation:"+per['age']);
console.log("Object property Key . notation:"+per.age);




