// array

const myArray =[0,1,2,3,4,5,6];
const myHeroes = ["Ironman", "Spiderman", "Hulk", "Thor"];

const myArray2 = new Array(1,2,3,4,5,6);

console.log(myArray[0]);
console.log(myHeroes[0]);

// Array methods
myArray.push(6);
myArray.push(7);
myArray.pop();
myArray.shift();
myArray.unshift(-1);
console.log(myArray.includes(9));

console.log(myArray.indexOf(3));


const newArray = myArray.join()
console.log(myArray);
console.log(newArray);


slice, spice

console.log("A" ,myArray);

const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B" ,myn1);

const myn2 = myArray.spice(1,3);

console.log("C" ,myn2);
console.log(myn2);
