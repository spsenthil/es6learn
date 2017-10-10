function a(){
  console.log(this)
}
//a();

//Referes to Global
var aFn=()=>console.log(this);
aFn();
