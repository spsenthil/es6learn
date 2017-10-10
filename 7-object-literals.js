//Object Literals

//Used a propery definition bewlow
let name='Max'

//used as a dynamic propety below
let ageField="age";


let obj={
  //name:'Max',//by default
  name,//1.Value will be used from outside.

  //name:'Max'//2.Overwrite it again

  //age:27,//default field name
  [ageField]:28,//3.Dynamic Field name, it cannot infer value.
  //6. access it like obj[ageField] in a function ee.g this[ageField]

  //4.Function definitions
  greet:function(){
    console.log(this.name)
  },
  //greet(){ console.log(this.age)}
  //both are same.


  //5.support space in names of cuntions
  "greet me"(){
    console.log(""+this.name)
  }
  //call this function as obj['greet me']()



}

console.log(obj)


