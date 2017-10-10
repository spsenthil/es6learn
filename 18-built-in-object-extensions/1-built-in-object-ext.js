//Object Extensions
//Object Extensions


var obj1={
  a:1
};

var obj2 ={
  b:2
};

//Takes the First object and puts into prototype.
//you could pass {} as first arg. it will become Object.prototype
var obj=Object.assign(obj1,obj2);
console.log(obj);


console.log(obj1.__proto__)//Will give Object

console.log(obj);


//----------
//Modifying prototype of object
Object.setPrototypeOf(obj1,obj2);
// will set it to the object 2
// if any property common to both object will be ignored on the second object


//-----------
Math.sign();


//String
let str='Hello world';

str.startsWith('Hell');//true, false. case sensitive
//edswith
//includes


//Number Object
//Previously
Number.isFinite() //Infinity
Number.isNaN()
number.isInteger();


//Arrays
Array.of(1,2,4);
let array=[];
array.from(array,/*transformerFn*/); //old array is not modified

array.fill(100)//all elements will be 100
array.fill(100,2 ,5)// indexes 2 3 4 wiill be 100
array.find(function() {//stpos at 1st occurance.
  //logic to find
})
//Fat arrow fn
array.find(val=> val>2);//stpos at 1st occurance.

array.copyWitin(1,2,3)//ChANGES THE ORIGINAL ARRAY Important to understand how it works
array.entries();//iterator index, value




