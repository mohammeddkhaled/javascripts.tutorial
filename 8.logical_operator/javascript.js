
const userAge = 20
//                        true                 false
const isSchoolStudent = (userAge >= 5)  &&  (userAge <= 18)    
console.log(isSchoolStudent);//false


//                           false                  true
const isSchoolStudent2 = (userAge >= 25)  &&  (userAge <= 30)    
console.log(isSchoolStudent);//false


//                          true                  true       
const isCollageStudent = (userAge >= 17)  &&  (userAge <= 22)
console.log(isCollageStudent);//  true



//                     false             true                  false
const isStudent = isSchoolStudent || isCollageStudent   || isSchoolStudent2
console.log(isStudent);//  true





//             example

//         falsy           truthy
const and = 0         &&     2                 //falsy = 0 , null ,empty string
console.log(and); // 0 




//          falsy         truthy
const or  =  0      ||      2 
console.log(or);//truthy



//                    true       true
const   andResult = 'hello' &&  2+4
console.log(andResult)  //6



//                    true       true
const   orResult = 'hello' ||  2+4
console.log(orResult)  //'hello'


