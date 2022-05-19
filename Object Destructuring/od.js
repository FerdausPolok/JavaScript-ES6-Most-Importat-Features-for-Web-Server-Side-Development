//Traditional Object Destructing

let person = {
    firstName: "Ferdaus",
    lastName: "Polok",
    dob: "1-1-1998"
}

// let fname= person.firstName,
// lname= person.lastName,
// dob= person.dob;

// console.log(fname, lname, dob);


//ES6 Object Destructing

let {firstName, lastName, dob} = person; //same variable name as object have to be used

console.log(firstName, lastName, dob);

//if we want to change the variable name->

let {firstName: fname, lastName: lanme, dob: DOB} = person; 
console.log(fname, lanme, DOB);


//same thing can be done while passing values of an object inside a function

let person2 = {
    firstName: "Abdur",
    lastName: "Rahim",
    dob: "1-1-1998"
}

function print({firstName, lastName, dob}){
    console.log(firstName, lastName, dob);

}

print(person2);
