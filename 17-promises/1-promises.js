//Promises
//Polifills so far


//Async proceeesing
//get response in future.
//Escapes callback
//Chain promises.


let promise = new Promise(function(resolve, reject) {


 //long running process
  //return x;

  setTimeout(function(){
    //resolve('Done');//Resolve it . it is importatnt
    //if processing is successful. resolve, else reject
    reject('Failed');//Resolve it . it is importatnt
  },1500);

 // resolve(10);


});


promise.then(/*Success callback*/function(vlaue) {

  console.log(vlaue);

}, /*Errror callback */function(error) {
  console.log(error)
});




///------- Chain promises -----


function waitASecond (second) {

  return new Promise(function(resolve, reject) {

    if(second>2){
      reject('rejected');
    }else {
      setTimeout(function() {
        second++;
        resolve(second)
      }, 1000);
    }

  })
}

waitASecond(2)//Change this to test it
    .then(waitASecond)/*Chained to promises*/
    .then(function(seconds)/*Wait till the previous then compleetes*/ {
      console.log(seconds)
    }).
    catch (function(error){//Handle rejections
      console.log(error)
    })

// all and Race


let promise1 = new Promise(function(resolve, reject) {


  setTimeout(function(){
    resolve('Done');//Resolve it . it is importatnt
    //if processing is successful. resolve, else reject
    //reject('Failed');//Resolve it . it is importatnt
  },1000);


});

let promise2 = new Promise(function(resolve, reject) {


  setTimeout(function(){
    //resolve('Done');//Resolve it . it is importatnt
    //if processing is successful. resolve, else reject
    reject('Failed');//Resolve it . it is importatnt
  },1000);


});


/** Execute only when all promises are done. (All or none !)
 * Else , it will be rejected.
 * */
Promise.all([promise1,promise2])
  .then(function(success) {
      console.log('Success')
  })
    .catch(function(err) {
  console.log('error')
    });

//Wait for the first promise to resolve. if resolved, it will resolve all.
//If one rejected, all will be rejected.
Promise.race([promise1,promise2])
.then(function(success) {
  console.log('Success')
})
.catch(function(err) {
  console.log('error')
});