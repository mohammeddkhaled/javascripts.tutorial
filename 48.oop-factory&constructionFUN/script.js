// 

// const user={
//     firstName: "Mohammed",
//     lastName: "Khaled",
//     age: 25,
// }

// function getBirthYear(age){
//     return new Date().getFullYear() - user.age
// }


///////////////////////////////////////////////////////////////



// const user = {
//     firstName: "Mohammed",
//     lastName: "Khaled",
//     age: 25,
//     getBirthYear: function () {
//         return new Date().getFullYear() - user.age;
//     },
// }


///////////////////////////////////////////


// for multiple user  with factory function /////////////////////////////////////////

// function createUser(firstName, lastName, age) {
//     const user = {

//         // firstName: firstName,
//         // lastName: lastName,
//         // age: age,

//         firstName,
//         lastName,
//         age,
//         getBirthYear: function () {
//             return new Date().getFullYear() - user.age;
//         },
//     }

//     return user;
// }

// const user1 = createUser("Mohammed", "Khaled", 25);
// const user2 = createUser("Ahmed", "Ali", 30);


////////////////////////////////////////////////////////////////

//  for multiple user with other method //  function only store one time   ///////////

// function createUser(firstName, lastName, age) {
//     const user = {

//         // firstName: firstName,
//         // lastName: lastName,
//         // age: age,

//         firstName,
//         lastName,
//         age,
//         getBirthYear:createUser.commonMethods.getBirthYear
//     }

//     return user;
// }

// createUser.commonMethods = {
//     getBirthYear: function () {
//         return new Date().getFullYear() - user.age;
//     },
// }


// const user1 = createUser("Mohammed", "Khaled", 25);
// const user2 = createUser("Ahmed", "Ali", 30);


///////////////////////////////////////////////

// for multiple user with constructor function //  function only store one time   ///////////

// constructor function means calling a function with the 'new' keyword

function CreateUser(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

CreateUser.prototype.getBirthYear = function (){
    return new Date().getFullYear() - this.age
}

CreateUser.prototype.getBirthYear = function (){
    return this.getFullYear + '' + this.lastName
}


const user1 = new CreateUser("Mohammed", "Khaled", 25);
const user2 = new CreateUser("Ahmed", "Ali", 30);
