
const user={
    firstName:'mohammed',
    lastName:'khaled',
    pata:{
        city:'hyderabad',
        pinCode:500028,
        state:'telangana',
        moreDetails:{
            population:9398450734,
            area:'657 sq km'
            
        },
    },
    age:15,
    isGraduate:false,
    
}

user.name = 'khaled'  // adding to object

delete user.firstName // deleting the value from object

Object.seal(user)    // by sealing the object u can not aad or delete any value which is in (user) object but it can modify the value

Object.freeze(pata)  //  by freezing the object u can not aad, delete or modify any value which is in (pata) object

'mobileNumber' in user  // it is use to check that mobileNUmber key  is exist in that object (user)




