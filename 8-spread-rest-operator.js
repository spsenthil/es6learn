//SPREAD Operator
var numbers=[1,2,3,4,5];

function sumUp(toAdd){
  var sum=0;
  for ( let i=0; i<toAdd.length; i++){
    sum+=toAdd[i];
  }
  return sum;

}
console.log(sumUp(numbers))

//for a list of values like 1, 2,3 etc... (no of args unknown)
//


//function sumUp(...toAdd)//makes the list into an Array
//console.log(sumUp(1,2,3));

//be careful with types. e.g (1,2,"3") -> prints 33


//---------------



//REST Operator
var numbers=[1,2,3,4,5];
//Math.max accepts a list
console.log(Math.max(numbers))//Nan
console.log(Math.max(...numbers))//prints 5 : flatterns the array into a list.
console.log(...numbers)//works