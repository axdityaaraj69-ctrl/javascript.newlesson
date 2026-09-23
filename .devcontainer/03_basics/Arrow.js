const user = {
    username : "Raj",
    price : 999,

    welcomeMesseage: function() {
        console.log(`${ this. username }, welcome to website`)
        console.log(this)
    }
}
// this means current context 

// user.welcomeMesseage()
// user.username = "Kaju"
// user.welcomeMesseage()
// console.log(this);
// function chai(){
//     let username = "raj"
//     console.log(this.username)
// }

// chai()


const chai = function (){
    let username = "Raj "
    console.log(this.username);
}


chai()
