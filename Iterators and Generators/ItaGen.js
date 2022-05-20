// Iterator
let iterable = "Hello";
iterable= [1,2,3,1,4,5] 

// Symbol.iterator
let iter = iterable[Symbol.iterator]();

console.log(iter);

console.log(iter.next());
console.log(iter.next());

console.log("Other codes")

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//Custom Iterable Object

let names= ["Abdur", "Rahim", "Karim", "Jalil"]

//Custom Iterator

function customIterator(arr) {
    let i = 0;

    return {
        next: function() {
            return i < arr.length ? { value: arr[i++], done: false} : { value: undefined, done: true };
        }
    };
}

let members = customIterator(names);

console.log(members.next().value);
console.log(members.next().value);

console.log("Random other codes");

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next());


// Generator

function* genFunction(){
    console.log("I am some extra code")
    yield 1;
    yield "Rahim";
    console.log("I am some extra code")
    yield 7;
    yield "Kahim";
    return; //er porer r kichui count hobe na
    yield "Hlw Wrld";

}

let iter2 = genFunction();

console.log(iter2);
console.log(iter2.next());
console.log(iter2.next().value);
console.log(iter2.next().value);

//These basically helps us to code in between iterating 