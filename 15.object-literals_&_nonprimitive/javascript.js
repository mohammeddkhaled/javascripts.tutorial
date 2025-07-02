// address for string is same if value is same

const userName1 = ''                            
const userName2 = ''

// address is always different does not matter if value is same or not

const user1={
    firstName:'mohammed',
    lastName:'khaled',
    address:{
     city:'hyderabad',
     pinCode:500028,
     state:'telangana',
    }

}

console.log(user1.firstName)    //dot notation
console.log(user1['lastName'] ) //using square bracket with string


const myName = 'khaled'

const user2= {
    'first-Name' : 'amer',     // if ur write key like this {first-Name} u have to aad string
    lastName : 'mateen',
    'khaled' : 'engineer',
}


console.log(user2['first-Name'])       // u can not write this with dot notation have to use bracket

console.log(user2[myName])             // we can write js variable  ,  expression and call function  using bracket notation

console.log(user2['last'+'Name']);    //example