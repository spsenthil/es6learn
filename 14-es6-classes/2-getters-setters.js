class Person
{
  constructor(name){
    this._name=name;//_is for private
  }

  get name(){
    return this._name.toUpperCase();
  }

  /** If you don't provide ins.name will be undefined **/

  /*set name(val){
    this._name=val
  }*/
}


var p=new Person('sph');

console.log(p.name);
p.name='Hello';//Will not work if no setter for this private variable

console.log(p.name);

console.log(p._name);//still it will work