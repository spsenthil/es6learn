/*
//ES5
function Person(){

}

var person=new Person();
*/

class Person{

  //reserved key word
  constructor(name){
    this.name=name
  }
  //blue print
  greet(){
    console.log(' Hello '+this.name )
  }



}
let person=new Person('Prakash');
person.greet()

console.log(person.__proto__)
console.log(person.__proto__ == Object.prototype)//false
console.log(person.__proto__ == Object)//false
console.log(person.__proto__ == Person.prototype);

//Inheritance








//Static Class Examples
//export and import it also. eg. export
class Helper{
  static logTwice(message){
    console.log(message,message)
  }
}

//No need of instance.
Helper.logTwice('Hello');

//-------
class Person{

  //reserved key word
  constructor(name){
    this.name=name
  }
  //blue print
  greet(){
    console.log(' Hello '+this.name +' Age is '+this.age)
  }



}

//Inheritance.
class Prakash extends Person{
  //if extended, need to call the parent class constructor.
  constructor(age){
    super('Prakash');//call the parent constructor
    this.age=age;
  }

  greet(){
    console.log('Iam Child')
  }
  greetTwice(){
    super.greet();//Parent

    this.greet();//current objec
  }

}


let person=new Prakash('Prakash');//parent class constructor
person.greetTwice()//parent class method

//Inheritance

