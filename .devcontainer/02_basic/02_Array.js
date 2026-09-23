const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];

// marvel_heroes.push(dc_heroes);


// console.log(marvel_heroes);
// console.log(marvel_heroes[3],[1]);


// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); 


const allHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allHeroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]];
const real_another_array = another_array.flat(2);
// console.log(real_another_array);




console.log(Array.isArray("Raj"));
console.log(Array.from("Raj"));
console.log(Array.from({name : "raj" }));  // intresting

let score1 = 100
let score2 = 200
let score3 = 300

const scores = [score1, score2, score3];
console.log(scores);

const new_scores = Array.of(score1, score2, score3);
console.log(new_scores);