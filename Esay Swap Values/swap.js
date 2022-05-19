//Traditional Swap

let a,b

a=10;
b=20;

console.log(`a = ${a} and b = ${b}`);

let temp;
temp=a;
a=b;
b=temp;

console.log(`a = ${a} and b = ${b}`);

//Smart Shortcut Swap

[a, b] = [b,a];

console.log(`a = ${a} and b = ${b}`);
