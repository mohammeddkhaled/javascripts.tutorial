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


class createUser {

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age

    }

    static hi = 'hello'

    // static {     // static block  // it will automatically run 

    //     console.log('hello');
    //     var a = 12

    //     this.hi = 'hello'

    //     this.getFullName = function () {
    //         return this.firstName + ' ' + this.lastName
    //     }

    // }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    static getFullName(){
        return this.firstName + ' ' + this.lastName
    }


}

const user1 = new createUser('mohammed', 'khaled', 23)

const user2 = new createUser('mohammed', 'mateen', 24)

console.log(user1);
console.log(user2);






