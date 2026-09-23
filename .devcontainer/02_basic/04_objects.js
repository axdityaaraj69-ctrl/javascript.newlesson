// // const tinderUser = new Object()
// const tinderUser = {
//     name: "Akash",
//     age: 18,
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]


// }
console.log(tinderUser);

const regularUser = {
    email: "akash@example.com",
    name: "Akash",
    full_name: { 
        userfirstName: "Akash",
        userlastName: "Kumar"   
    }
}       
console.log(regularUser);


const obj1 = {1: "a", 2: "b", 3: "k"}
const obj2 = {1: "a", 2: "j", 3: "c"}

// const obj3 = {obj1,obj}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}

console.log(obj3);

// const users = [
//     {
//         id : 1,
//         email : "akash@example.com",
//         name : "Akash",
//         gender : "Male"
//     },
//     {


//     },{


//     }
//     , {


//     }
// ]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));




