'use strict';

// Write ES6 code here...

import  /*aSampleDefault ,  can be imported like this too*/{moduleVariable /*can be aliased with as e.g moduleVariable as moduleRefVariable*/,modularFunction} from './external.js';
//import {modularFunction} from './external.js';


//import * as samplePackageNameAsObject from './external.js' import everything exportedfrom the file 
//console.log(samplePackageNameAsObject.xxxx)


//If there is a default export then the syntax is
import aSampleDefault /*This can be aliased to anything e.g MyClass*/ from './external.js'


console.log("Before"+moduleVariable)
modularFunction();
console.log("After:"+moduleVariable)
console.log(aSampleDefault)