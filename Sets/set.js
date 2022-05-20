// Set is a data structure on which we can not store any duplicate vlue/ data

let ar =[1,1,2,2] //is possible
console.log(ar);

//set

let mySet = new Set([1,2,2,4,4,5]);
console.log(mySet); //Ignores the duplocate values

//add
mySet.add("Hello")
console.log(mySet); 

mySet.add("Hello")
console.log(mySet); 

mySet.add(2)
console.log(mySet); 

//delete
mySet.delete(2);
console.log(mySet); 

//check member
console.log(mySet.has(2)); 

//size
console.log(mySet.size); 

//set iterator

let iter = mySet.entries();
console.log(iter); //value == key

console.log(iter.next());

//iterating sets
for (x of mySet){
    console.log(x);
}

for (x of mySet.entries()){
    console.log(x);
}

for (x of mySet.keys()){
    console.log(x);
}

for (x of mySet.values()){
    console.log(x);
}

for (let [x] of mySet.entries())
{
    console.log(x)
}

for (let x of mySet.entries())
{
    console.log(x)
}

iter = mySet.entries();
console.log(iter); //value == key

iter = [...mySet.entries()];
console.log(iter);

iter = [...mySet.keys()];
console.log(iter);

iter = [...mySet.values()];
console.log(iter);