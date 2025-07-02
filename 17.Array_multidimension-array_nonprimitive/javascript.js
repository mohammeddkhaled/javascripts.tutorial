//string
const userName = 'khaled'

//array   [ lifo]

const fruit = ['Apple','Banana','Grapes','dates']
console.log(fruit);


// modify
fruit[2] ='mango'                               // modifying grapes with mango
console.log(fruit);

// push
fruit[4] = 'water melon'                       // adding   (push)
// fruit[fruit.length] = 'water melon'
// fruit.push('water melon')
// fruit.push('water melon','papaya','pineapple')
console.log(fruit);  


// pop 
fruit.pop()                                           //delete    (pop)    
console.log(fruit);


// array common method 


const evenNumbers = [0,2,4,6,8]
const oddNumber = [1,3,5,7,9]
const wholeNumber =[10,11,12,13,14]

const animals = ['cat','tiger','ship','lion','cow','elephant','rat']


// shift
evenNumbers.shift()                                          // it will delete the character from the  front,,,,, nad it wil change the index of all character
console.log(evenNumbers);


// unshift
evenNumbers.unshift(0)                                        //it will add the character from the front,,,, nad it wil change the index of all character
console.log(evenNumbers);


// concat
const addingArray1 = evenNumbers.concat(oddNumber)            // adding two string
console.log(addingArray1);


const addingArray2 = evenNumbers.concat(oddNumber,wholeNumber)  // adding multiple array
console.log(addingArray2);



// indexof
const index = wholeNumber.indexOf(12)                     // i will show that the character is at which index,if is not exit in array out will be is negative
console.log(index);


// includes
const includes = wholeNumber.includes(12)                // it will show is that character is exit or not
console.log(includes);


//reverse
const reverse = animals.reverse()                       // reverse the array
console.log(reverse);



//sort
const sort = animals.sort()                            //it will first convert the character into {UTF-16 code} and then sort it
console.log(sort);


//slice(start,end)
const slice = animals.slice(3,6)                     //it will slice the array from 3 to 6 and give u a new array and it will not change the array
console.log(slice);
console.log(animals);



//splice(start,no.element,new element)
const splice = animals.splice(4,1)                 //it will delete that element from array  and give u a new array
console.log(splice);
console.log(animals);


const splice2 = animals.splice(2,1,'zeraf','gorilla') 
console.log(splice2);
console.log(animals);










//  Multidimensional Array 

const class10 = [['affan',17],['khaled',35],['suhaib',46],['Waleed',55],['zubair',56],['zuhair',57]]

const Multidimensional=class10[3][1]                            // to excess the element 


console.log(class10);
console.log(Multidimensional);


const TicTacToe =[
    ['X',null,null],
    [null,null,'O'],
    ['O',null,'X']
]

const game = TicTacToe[2][1]

console.log(TicTacToe);
console.log(game);








const aaa = ['aa','bb','cc','dd']

const bbb = aaa


console.log(aaa);
console.log(bbb);

