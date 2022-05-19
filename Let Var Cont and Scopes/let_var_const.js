/*
var=>
New Declaration/ Assign -> YES
Change Value/ Re-Assign  -> YES
Again Declaration/ Writting var keyword again before variable -> YES

let=>
New Declaration/ Assign -> YES 
Change Value/ Re-Assign  -> YES
Again Declaration/ Writting let keyword again before variable -> NO

const=>
New Declaration/ Assign -> YES 
Change Value/ Re-Assign  -> NO
Again Declaration/ Writting const keyword again before variable -> NO

*/

//Schopping of var, let, const

//Global Scope

var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope Values:", a, b, c);

//Local Scope - Function

function test() {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log("Local Scope Function Values:", a, b, c);
}

test()
console.log("Global Scope Values:", a, b, c); //no changes 

//Local Scope- if
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;

    console.log("Local Scope if Values:", a, b, c);
}

console.log("Global Scope Values:", a, b, c); //changes on var

//Local Scope- for

for (var a = 0; a < 10; a++) {
    console.log("Loop", a);
}

console.log("Global Scope Values:", a, b, c); //changes on var



//Hence we will try to use LET instead of VAR. So that, we don't get ERROR, OVERLAP