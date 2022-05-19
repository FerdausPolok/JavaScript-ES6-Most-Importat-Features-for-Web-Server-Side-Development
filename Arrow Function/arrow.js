//Normal Function with no parameter
function normal_hello_0(){
    console.log("Hello from normal zero parameter function");
}

//Arrow Function with no parameter
let arrow_hello_0 = () =>{
    console.log("Hello from arrow zero parameter function");
}

normal_hello_0();
arrow_hello_0();

//Normal Function with single parameter
function normal_hello_1(name){
    console.log("Hello",name, "from normal one parameter function");
}

//Arrow Function with single parameter
let arrow_hello_1 = name =>{
    console.log("Hello",name,"from arrow single parameter function");
}

normal_hello_1("Polok");
arrow_hello_1("Polok");

//Normal Function with multi parameter
function normal_hello_2(fname, lname){
    console.log("Hello",fname, lname, "from normal one parameter function");
}

//Arrow Function with multi parameter
let arrow_hello_2= (fname, lname)=> {
    console.log("Hello",fname, lname, "from arrow one parameter function");
}
normal_hello_2("Polok","Zaman");
arrow_hello_2("Polok", "Zaman");


//Callback Function: When we call another function as a parameter inside a function that is called callback function

//Example using insider function as arrow function

numbers = [1,2,3,4,5]
numbers.forEach( item =>{ //we passed a without name function inside ForEach which it self is a function
    console.log(item)
});

//Let make it more clear by creating the function separately 

let printAll = item => console.log(item); 
numbers.forEach(printAll); //we dont neet to use () inside another function/ while using callback

//Example using insider function as normal function

let squareNumNORMAL = numbers.map( function (item){ return item * item })

//SAME THING WITH ARROW

//let squareARROW = numbers.map( item => {return item * item })
let squareARROW = numbers.map( item => item * item ) //let squareARROW is using as array here


console.log(squareNumNORMAL);
console.log(squareARROW);

