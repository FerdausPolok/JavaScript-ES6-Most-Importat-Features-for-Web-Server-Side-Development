//Oposite of spread operator
//Spread separates elements and Rest gather elements

//Rest in Arra
let fruits = ["Mango", "Apple", "Grape", "Jackfruit"]

let [first, second, ...third] = fruits

console.log(first)
console.log(second)
console.log(third)

//Rest in Object

let person ={
    fname: "Ferdaus",
    lanme: "Polok",
    dob: "1-1-1998"
}

let {fname, ...lname} = person

console.log(fname);
console.log(lname);

//Use in Perameter

let test = (name, ...numbers) => { //Rest
    console.log(name);
    console.log(numbers);
}

test("Polok", 67,10,12,16) 

let moreNum= [1,2,54854,11]

test("Polok", ...moreNum) //spread


