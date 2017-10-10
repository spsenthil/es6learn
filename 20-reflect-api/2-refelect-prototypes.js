
class Person{
  constructor (){
    this.name='Prakash';
  }

}

let person=new Person();
Person.prototype.age=20;//Recommended way to access it.

/** Modify the prototype **/
let sample={
  age:30,
  greet(){
    console.log('hellpo')
  }
}
Reflect.setPrototypeOf(person,sample);
Reflect.apply(sample.greet,null,[]);//Accsss a method.
/**/



console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) === Person.prototype);

console.log(Reflect.getPrototypeOf(person) === Person.prototype);
console.log(person.__proto__ == Person.prototype);


//Accessing props

class Person{
  constructor (name, age){
    this._name=name;
    this.age=age;
  }

  get name(){
    return this._name;//private
  }

  /*set name(value){
    this._name=value;
  }*/
}

let mum={
  _name:'Mum'
}


let  person=new Person('Hell',1);

console.log(person.name);

Reflect.set(person,'name','World');

console.log(Reflect.get(person,'name'));//May be an unknown property will be a good

console.log(Reflect.get(person,'name',{/*This property context mum*/}));

Reflect.has(person,'name');//to check if a property exists.

Reflect.ownKeys(person);//Gives only this object keys

//google:js object define property mdn

Reflect.defineProperty(person,'propName',{/*Significant*/writable:true,value:['dfaultvalue'],configurable:true/*Default readonlye*/})

//delete person.age;
Reflect.deleteProperty(person,'propName');//delete a object key to delete.


//Preventing object Extension: lock it
Reflect.preventExtensions(person);//No more extensions (no properties can be defined further.)

Reflect.isExtensible(person)//just to check if the object is locked.


