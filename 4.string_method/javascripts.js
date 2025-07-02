//                  indexes

const message = 'hello world'
console.log(message[2]);


//                 length


const message2 = 'my name is mohammed '
console.log(message2.length)


//                 properties

//                 METHOD WITHOUT ARGUMENT


const message3 = 'mohammed khaled  '                          // 1. touppercase() 

console.log(message3.toUpperCase());


//                    or

// const a = message3.toUpperCase()
// console.log(a);

console.log(message3.toLowerCase());                          // 2.tolowercase()
  

//                                                           // 3.trim()       4.trimStart ()       5.trimEnd()

const wasteMessage =   '               hi   kvm vfn fgv                   '
console.log(wasteMessage.trim())


const chaining = '            mohammed khaled          '    // chaining

const finalChaining = chaining .trim().toLocaleUpperCase()
console.log(finalChaining);



//             METHOD WITH ARGUMENT


const message5 = 'hi, i am mohammed khaled'                 

console.log (message5.includes('i am' ))                      //1. includes(argument)[ boolean]
console.log(message5.includes('you'))

console.log(message5.indexOf('i'));                           //2. indexof(argument)  [number]
console.log(message5.indexOf('z'));

console.log(message5.replace('hi','hello'));                  //3. replace(from,to)    [string]

console.log(message5.replaceAll('m','M'));                    //4 .repalceall(from,to)


const a = 'hi,'
const b =' i am khaled'
const c = 'computer science engineering '

console.log(a.concat(b,' ' ,c));                             //5. concat(variable,variable.....)  {concat = add}


const accountNumber = '7866'

console.log(accountNumber.padStart(16,'*'));                 //6. padStart( total number output ,' character' )
console.log(accountNumber.padEnd(16,'.'));                   //7. padEnd ( total number output ,' character' )


console.log(accountNumber.charAt(3));                       //8. carAt is same as index

console.log(accountNumber.charCodeAt(2));                   //9.carCodeAT gives the code of numbers,alphabet,special,character.


//                       template literal string



const addString = 'my account number is ' + accountNumber    // add method

const  concatString = 'my account number is' . concat(accountNumber)  // concat method

const templateString = `my account number is ${accountNumber}`        // template method

const  templateString2 = `my account number is ${accountNumber.padStart(16 ,'*')} `

const templateString3 = `my name is ${message3.toUpperCase().padEnd(20,'@')}` 












