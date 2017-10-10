//De-structuring
let numbers=[1,2,3];

//let a=numbers[0]
//let b=numbers[1]

//console.log(a,b)

//let [a,b]=numbers;//Extract arrays ie. 1,2 onlye here.
//console.log(a,b)
//Original array is not changed.

//let [a,b,c,d]=numbers; //extra will be undefined. ie. d=undefine.


//let [a, ...b]=numbers; //rest operator will retrieve part of arrays.

//console.log(b) //prints [2,3]

//let [a='even existing value cand be default',b,c,d='D has a default values']=numbers;

//console.log(d);


//swapping

//let a=10;
//let b=20;
//[b,a]=[a,b]; //no let here.

//let [a,,c]=numbers;//add a empty space to leave out an element
//console.log(c);



let [a,b]=numbers; //immediately extract a, c
console.log(a,b)

console.log(numbers)



