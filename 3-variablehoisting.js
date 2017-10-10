/**** Variable Hoisting in JS ******/

//age=20;
//console.log("Hoisting Testing:",age);
//var age;
//console.log("Hoisting Testing After Dec:",age); //20

//Hoistin with let

lage=20;
//console.log("Hoisting Testing Let:",lage);
let lage;
console.log("Hoisting Testing After Let Dec:",lage); //un defined.

//Let and const do not work the way traditionally how var works. ! 

//Testing with Functions
//Declare before using is the golden rule.
function doSth(){
 age=27; 
}
let age;

doSth()
console.log(age)//Works since we decalared before calling the function. moving down to the function call will give undefined.

