
//Default Parameter
function a (a,b=1){
    return a+b

}
//exp

function rollADie (numberOfSides = 6){
    return Math.floor (Math.random()*numberOfSides) +1

}

////////////////////////////

//spread operator

const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8, 9]

const myName = 'Anurag'

const joinedArray = [...nums1, ...nums2, 10, 11, 12]

const user = {
    name: 'Anurag',
    age: 25,
}

// const updatedUser = {...user, city: 'Bangalore'}

function add() {
    console.log(arguments);
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }

    return sum
}

/////////////////////////////////////////


//REST PARAMS


// function add(...nums){

//     console.log(nums);
//     let sum = 0

//     for (i=0 ; i<number.length ; i++){
//         sum = sum + nums[i]
//     }

//     return sum 


// }

// add (3,5,6,7,)

//////////////////////////////////

// const number = [1,2,3,4,5,6]

// function add(a,b,c,d,...nums){               //change

//     console.log(a,b,c,d,);
//     console.log('nums:' , nums);

//     let sum = 0

//     for (i=0 ; i<number.length ; i++){
//         sum = sum + nums[i]
//     }

//     return sum 


// }

// const result = add (...number,66,77,88)      //change

////////////////////////////


function add(...nums){

    // nums.reduce((accumulator,current,i) =>{
    //     console.log(accumulator,i);

    //     return current+accumulator

    // },10)

    return nums.reduce((acc,curr) => acc +curr)
   
}

const result = add (66,77,88)                          //change



////////////////////  DESTRUCTURING




const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white']

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

const [color1, color2, color3] = colors

// const [,,,color4] = colors

const { 3: color4, 5: color5 } = colors




const user2 = {
  name: 'Anurag',
  age: 25,
  address: {
    city: 'Bangalore',
    state: 'Karnataka',
  },
}

// const name = user2.name
// const age = user2.age
const { name, age } = user2

const { name: username, age: userAge } = user2


const { address } = user2
const { city } = address

// const { address: {city} } = user2




// intro(user)

function intro({age, name}) {
  console.log(age, name);
}


function printColor([a, b,,g]) {
  console.log(a, b, g);
}

printColor(colors)







