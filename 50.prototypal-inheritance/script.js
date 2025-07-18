class user {
    constructor (firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }
    get fullName (){
        return `${this.firstName}  ${this.lastName}`
    }
    get getBirthYear (){
        return new Date().getFullYear() - this.age
    }
}
const  user1 = new user('mohammed', 'khaled', '23')
console.log(user1);


class student extends user{
    constructor(firstName, lastName, age, standard){
        super(firstName, lastName, age)
        this.standard = standard

    }
}
const student1 = new student('mohammed', 'khaled', 23, 'graduate')
console.log(student1);


class employee extends student{
    constructor(firstName, lastName, age,standard, domain){
        super(firstName, lastName,standard, age )
        this.domain = domain
    }
}
const employee1 = new employee('mohammed', 'khaled', 23, 'graduate', 'webDevelopment')
console.log(employee1);