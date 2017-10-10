//Proxy api
//Encloses an object
//Accsss: Soucecode - > proxy object (traps) - > object

//Traps
//es6 proxy available traps

let person={
  name:'Max',
  age:27
};

let handler={
  get:function(tgtObject, proprtyName,receiver) {
    return proprtyName in tgtObject?tgtObject[proprtyName]:'Property not exists';
  },
  set:function(tgtObject,propertyName,value) {
    if(value.length >= 2){
      Reflect.set(tgtObject,propertyName,value)
    }
  },
  /*Use any of the doucmented API methods*/
};


let proxy=new Proxy(person,handler);//Can use the Handler on any object.

proxy.name='H';//Will not allow it will igonre it.
proxy.name='Longer than 2 ';//Will be allowed.
console.log(proxy.age);




//----------- Prototype


let newObject={
  name:'Max',
  age:27
};

let haelder={

}

let protoHandler={
  get:function(tgtObject, proprtyName,receiver) {
    return proprtyName in tgtObject?tgtObject[proprtyName]:'Property not exists';
  }

  /*Use any of the doucmented API methods*/
};


let proxy=new Proxy({},handler);//Use this asa prototype
//Proxies can be prototypes


let protoProxy=new Proxy(proxy,handler)//Lot of magic
Reflect.setPrototypeOf(newObject ,protoProxy);//Wrap a proxy in a proxy.

console.log(newObject.name);//Non existenet initially
//Use direclty the object. but still protected.

console.log(newObject.hobbies);//Non existenet initially

//-------------



//Wrapping functions in Proxy
function  log (message) {
   console.log("LOG:"+message)

 }

log('Hello');

 let handler={
   //Trap to function
   apply:function(tgtObject,thisArg,argsList) {
     if(argsList.length===1){
       return Reflect.apply(tgtObject,thisArg,argsList)
     }
   }

 }

let proxy=new Proxy(log, handler);
proxy('Hello');//WOrks
proxy('Hello',10);//Fails


//Revokable Proxies.
//Setup, remove the proxy

let revoekableObj={
  name:'Max'
}

let revokeableHandler={
  get:function(tgtObject, propName) {
    return Reflect.get(tgtObject,propName)
  }
}

let {proxy,revoke}=Proxy.revocable(revoekableObj,revokeableHandler);


//revoke();

console.log(proxy.name);//will give error if the above is invoked.
