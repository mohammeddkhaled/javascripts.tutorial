// class createUser {

//     constructor(firstName, lastName, age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age

//     }


//     getBirthYear(){
//         return new Date().getFullYear() - this.age
//     }

//     getFullName(){
//         return this.firstName + ' ' + this.lastName
//     }


// }

// const user1 = new createUser ('mohammed', 'khaled', 23)

// const user2 = new createUser('mohammed', 'mateen', 24)

// console.log(user1);
// console.log(user2);


////////////////////////////////////////////////

// private property & private method


// class createUser {


//     #age  // have to declare out side other it give error

//     constructor(firstName, lastName, age){

//         this.firstName = firstName
//         this.lastName = lastName
//         this.#age = age                  // private property

//     }

//     #hi = 'hello' //private property it already out side


//     getBirthYear(){
//         console.log(this.hi);   // accessing the hi

//         console.log(this.#getFullName());    //accessing the private method in other method

//         return new Date().getFullYear() - this.#age
//     }

//     #getFullName(){      // private method 

//         return this.firstName + ' ' + this.lastName
//     }


// }

// const user1 = new createUser ('mohammed', 'khaled', 23)

// const user2 = new createUser('mohammed', 'mateen', 24)



/////////////////////////////////////////////////////////////////////////////
// static properties and method on class

// class createUser {

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age

//     }

//     static hi = 'hello'

//     // static {     // static block  // it will automatically run 

//     //     console.log('hello');
//     //     var a = 12

//     //     this.hi = 'hello'

//     //     this.getFullName = function () {
//     //         return this.firstName + ' ' + this.lastName
//     //     }

//     // }

//     getBirthYear() {
//         return new Date().getFullYear() - this.age
//     }

//     static getFullName(){
//         return this.firstName + ' ' + this.lastName
//     }


// }

// const user1 = new createUser('mohammed', 'khaled', 23)

// const user2 = new createUser('mohammed', 'mateen', 24)

// console.log(user1);
// console.log(user2);

/////////////////////////////////////////////////////////////////////////

// getter and setter

// const user = {
//     firstName: 'mohammed',
//     lastName: 'khaled',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`

//     },
//     // set fullName (value){
//     //    const  splitted = value.split(' ')
//     //    console.log(splitted);
//     //    this.firstName = splitted[0]
//     //    this.lastName = splitted[1]
//     // }
//     //        or
//      set fullName(value) {
//     const [firstName , lastName] = value.split(' ')
//     this.firstName = firstName
//     this.lastName =lastName
// }
// }
// // console.log(user.firstName+ " " + user.lastName);
// //or
// // console.log(`${user.firstName} ${user.lastName}`);
// user.fullName = 'mohammed mateen'

////////////////////////////////

// getter and setter with classes
class createUser {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age

    }
    getBirthYear() {
        return new Date().getFullYear() - this.age
    }
    get FullName() {
        return `${this.firstName}  ${this.lastName}`
    }
    set fullName(value) {
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}
const user1 = new createUser('mohammed', 'khaled', 24)




