//Spread Operator ... in string

str ="Ferdaus";
newStr = [...str]; //will get an array of separate Ferdaus same as split

console.log(newStr);

//Spread Operator ... in Array

let fruit1 =["Apple", "Mango"];
let fruit2= ["Orange", "Grape"];
let newFruit = "Jackfruit"

let allFruit= [...fruit1, newFruit, ...fruit2]

console.log(allFruit);

//Spread Operator ... in Object - ES8

let person = {
    fname: "Ferdaus",
    lname: "Polok"
}

let newPerson = {...person, dob: "1-1-998"}

console.log(newPerson);