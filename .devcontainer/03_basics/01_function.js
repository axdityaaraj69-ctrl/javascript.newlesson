// function sayMyName()

// {console.log("A");
// console.log("B");
// console.log("C");
// console.log("D");
// console.log("E");
// console.log("F");
// }
// // sayMyname();

// // function addTwoNumbers(number1,number2){

// //     let result = number1 + number2;
// //     console.log(result);
// //     return result;
// // }
// // addTwoNumbers(5,10); 
// // addTwoNumbers(5,10);                
// //     console.log(number1 + number2)

// // addTwoNumbers(5,"a"); 

// function loginuserMessage(username) {
//     if(username === undefined) {

//     console.log("Please enter a username");
//     return;
//     }
//     return `${username} just logged in`;
// }

// // console.log(loginuserMessage("Akash"));
// function loginusermeseage(username){

//     if(username === undefined){ 
//         console.log("Please enter a username");
//         return;
//     }
//     return `$(username) just Logged in`;
// }


function calculateCartprice(val1,val2, ...  num1){
    return num1 
}
console.log(calculateCartprice(1000,200,100));


const user = {
    username : "RAJ",
    price : 1000,
    course : "JavaScript"   
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} and course is ${anyObject.course}`);
}
// handleObject(user);

handleObject({
    username : "RAJ",
    price : 1000,
    course : "JavaScript"   
});
    const myNewArray =[100,200,300,400,500,600,700,800,900];    

    function returnSecondValue(getArray){
        return getArray[10];
    }


    console.log(returnSecondValue(myNewArray));


    