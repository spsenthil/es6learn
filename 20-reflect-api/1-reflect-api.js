//Meta Programming
//Tools at run time to to evaluate code.
//1.It bundles into Reflect + Proxy API
//2.Mixture of
//3.Old ways to do it.
//4. Cleaner way to do it.
//5. Additional


//ES6 reflect api mdn.


class Person{
  /*constructor (){

  }*/

  constructor (name){
    this.name=name;
  }
}


function TopObject () {
  this.age=27;

}

let person=Reflect.construct(Person,['Max'],TopObject);//3rd arg is Prototype


//Appy function

class ReflectTest{
  constructor (name,age){
    this.name=name;
    this.age=age;
  }

  greet(){
    console.log(this.name,this.age)
  }

}

let p=Reflect.construct(ReflectTest,['SPH',20]);

Reflect.apply(p.greet,p,[]);//Proper way to call

Reflect.apply(p.greet,{}/*This argumet*/,[/*Arguments to method*/]);//this referes to undefined.
//Get used to it.

