//Extending Built in objects.
//Sub classing
//https://kangax.github.io/compat-table/es6/ - Compatibility Matrix.
class ConvertableArray extends Array{

  convert(){
    let retArray=[];
    this.forEach(value => retArray.push('New:'+value));
    return retArray;
  }
}

let sampleArray=[1,2,3];//not allowed.

let numArray=new ConvertableArray();//Cannot use array notation.
numArray.push(1)
numArray.push(2)
numArray.push(3)
console.log(numArray.convert())



//