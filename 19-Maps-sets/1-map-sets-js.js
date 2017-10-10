//Maps and Sets
//Map & Sets

//Map
//Key


let cardAce={

  name:'Ace of Spades'
}

let cardKing={

  name:'Ace of Spades'
}

let deck=new Map();

//[[key, value],[key,value]]
deck.set('ace',cardAce);
deck.set('king',cardKing);



console.log(deck);//deck.size

deck.set('ace',cardAce);//Override the existing key

console.log(deck.get('ace'))//get

//deck.size
//deck.delete('ace')//Deletes the entry with the key

//deck.clear();//remove all


//deck.keys() //iterator
//keys only
for(let key in deck.keys()){
  console.log(key)
}

//values
for(let val in deck.values()){
  console.log(val)
}

//iterating a map
for(let entry in deck.entries()){
  console.log(entry)//['key', value]
}


for(let  entry in deck){//Iterate it as above.

}

//Use Iterator by overrideing to customize the

//WeakMap

var test=new WeakMap();//not equal to Map
//Has Weak reference to entries.
//if an entry is n ot used , it will be garbage collected.
//key will only be an object. (Only objects as keys)
//Cannot iterator
//no size property.

var key1={a:1};
var key1={a:2};

test.set(key1,cardAce);
test.set(key1,cardKing);

console.log(test.get(key1));//get the object



