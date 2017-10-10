//Sets
//An Array of values where only unique values
//No get method

let set=new Set([1,1,2,3]);
set.add(1);//not executed on existing element
set.add(4);//added


for(let element of set){
  console.log(element)//1,2,3
}


for(let element of set.entries()){
  console.log(element)//[index,value]
}
for(let element of set.keys()){
  console.log(element)//[index,value]
}

for(let element of set.values()){
  console.log(element)//[index,value]
}

//
set.delete(1);
set.clear();//remove all

set.has(1);//does element exist?

/****/


//WeakSet
//Not iteratable.
//Performance.
let a={a:1};//if no loger used in code, it will be garbage collected.
let wset=new WeakSet([a,{a:2},{a:3},{a:3}]);
console.log(wset.has(a));
//We are creating a new obj.
//in a new memory location.wset.has({a:1}})
//wset.add();
//wset.delete();