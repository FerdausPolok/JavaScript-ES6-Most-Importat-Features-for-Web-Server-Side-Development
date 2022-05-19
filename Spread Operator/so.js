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

//Spread Operator ... in Function Perameter

let numbers = [10,12,585,1]

console.log(Math.max(numbers)) //we want to find the max but math.max can not work with array

//hence we can use spread here

console.log(Math.max(...numbers)) 

let person2 = ["Ferdaus", "Polok"]

let test = (fanme, lname) => {
    console.log(`Hello ${fanme} ${lname}`);
}

test(person2[0], person2[1]);

//Simplifying the same procedure using spread

test(...person2);