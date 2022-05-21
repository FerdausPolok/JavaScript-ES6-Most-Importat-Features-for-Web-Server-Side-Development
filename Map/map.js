// Map is another data stucture that can store data with a key. It's more like object in js and dictionary of python

let myMap = new Map( //will add data inside a array in pair format
    [

        ['first key', 10],
        ['second key', 'Polok']
    ]
)

console.log(myMap);

//To add new data  in map

myMap.set('third key', 'Hello')

console.log(myMap);

//call single value using key

console.log(myMap.get('third key'));


console.log(myMap.has('third key'));
console.log(myMap.has('fifth key'));

//size of map

console.log(myMap.size);

//iterating map
//key value pair
for (let x of myMap){
    console.log(x); 
}
//key value separate
for (let [x,y] of myMap){ //x key y value
    console.log(x,y); 
}
//only key iterating
for (let x of myMap.keys()){
    console.log(x); 
}
//only value iterating
for (let x of myMap.values()){
    console.log(x); 
}

//we can also use foreach in map

myMap.forEach(( x, y) =>{
    console.log(x,y);
}) //first parameter value and second key , normally vise versa

//Map to Array

let arr = Array.from(myMap);
console.log(arr);

//Map to only key array

let arr2 = Array.from(myMap.keys());
console.log(arr2);

//Map to only values array

let arr3 = Array.from(myMap.values());
console.log(arr3);