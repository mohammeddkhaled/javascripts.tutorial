// const userName = 'khaled'     //script
// let  userAge = 22              //script
// var a = 50                     //global



// function add (){                      //global /local
//     const userName = 'mateen'
//     const x = 5
//     const y = 54
//     console.log(x + y);
//     console.log(userName);
// }

// function subtract(){
//     const  x = 14
//     const y =34
//     const z = 65

//     console.log(x-y);
//     console.log(userName);
// }

// add()
// subtract()

// console.log(programEnded);


debugger

const userName = 'khaled'     //script
let  userAge = 22              //script
var a = 50                     //global



function subtract(){                         // inner function can excess to all outer function where outer cn not excess to inner
    const  x = 14
    const y =34
    const z = 65

    console.log(x-y);
    console.log(userName);

    function child (){                        //lexical scope means the all parent function is a lexical scope to the child
        const childName = 'golu'
        console.log(childName);
        console.log(z);                       // closure to subtract using outer function value 


        function grandchild (){
            const grandchildName ='bholu'
            console.log(grandchildName);
        }
        grandchild()

        {                                       // block scope only excess able with in a bracket if u want to excess out of the bracket use 'var' but it can excess with in a function scope
            let = num1 =54                     //it can excess all the outer function but not block
            console.log(num1);
        }

        
    }
    child()
}

subtract()

console.log(programEnded);
