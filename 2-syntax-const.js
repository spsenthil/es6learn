t CONSTANT_OBJ={
pageSize:10,
  nestedObj:{
  nestedProp1:'nestedProp1'
  }
}

console.log("Constant Page Size is:",CONSTANT_OBJ.pageSize)//Logs 10

CONSTANT_OBJ.name='Hello';
CONSTANT_OBJ.pageSize=20;//Allowed to change the values (contents of an object)
console.log(CONSTANT_OBJ.name);
console.log("CONST_OBJ nestedObj.nestedProp1::",CONSTANT_OBJ.nestedObj.nestedProp1);


/** Nested Object test
const aObj={
name:'Hell',
  address:{
  city:'BLR'
  }
};


aObj.address={
city:'Modified BLR'
};
console.log(aObj.address.city)
/**** /

//CONSTANT_OBJ={pageSize:11} //ERROR:Is readonly cannot modify

//
//Arrays
const SAMPLE_ARRAY=[1,3,5,7]
console.log(SAMPLE_ARRAY)
SAMPLE_ARRAY.push(2);
console.log(SAMPLE_ARRAY)

//SAMPLE_ARRAY=[2,4,6] //ERROR:Is readonly cannot modify 
//
//-------------//
