//Iterators - loop through the objects
//to retrive the values custom logic


//Generator - yields next value some value each time called.



let array=[1,2,3];
console.log(typeof array[Symbol.iterator]);

let ite=array[Symbol.iterator]();
console.log(ite);
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next()); //done is set to true once all have been traversed.



//Make any object itrable



//--------------   =======

let array=[1,2,3];
console.log(typeof array[Symbol.iterator]);

//Built in symbol to iterate an array
//Returns an object with next function,
//  the next function returns an object with done, value
array[Symbol.iterator]=function(){
  let nextValue=10;
  return {
    next:function(){
      nextValue++//Our custom object.
      return {
        done:nextValue>15?true:false,
        value:nextValue,
      }
    }
  }
}

for(let el of array){
  console.log(el);
}


//--------- Implement a Custom iterator on an object


let per={
  name:'Max',
  hobbies:['sports','cook'],
  //Built in Symbol - Override so that an object knows what you are actually iterating. and makes the object iterable.
  [Symbol.iterator]:function(){
    let i=0;
    let hobbies=this.hobbies;
    return{
      next:function(){
        let value=hobbies[i];
        i++;
        return {
          //decide when to stop
          done:i>hobbies.length ?true:false,
          //return actual value.
          value:value
        };
      }
    };
  }
};

//Iterate Object
for(let hobby of per){
  console.log(hobby)
}
