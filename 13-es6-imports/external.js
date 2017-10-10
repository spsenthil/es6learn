export  let moduleVariable=10;

export function modularFunction(){
  moduleVariable=2000; //will be modified after calling this function
  console.log("sample");
}

//can be multiple
//Group export
export {moduleVariable,modularFunction};

//export arrays, objects, variables, classes

let aSampleDefault='exported default value';
export default aSampleDefault;
