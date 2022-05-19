//Array Destructing means assiging the values of array into single variables

let fruits = ["Apple", "Mango", "Orange"];

let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//if we wanna skip a value then we will be using just , to skip

let fruits2 = ["Apple", "Mango", "Orange"];

let [fruit4, ,fruit5] = fruits;

console.log(fruit4);
console.log(fruit5);