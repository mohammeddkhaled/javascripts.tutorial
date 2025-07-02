
//it will only work in function declaration and function expression 

// function add (a,b) {
//     console.log(a+b);
//     return a+b

// }

// add (3,4,5,6)

function add (){
    console.log(arguments);
}

add(3,4,5,6)


/////////////

function add2(){
    
    let sum = 0
    for(i=0; i<arguments.length ; i++){
        sum = sum + arguments[i];
    }
    
    console.log(sum);

}

add2(3,4,5,6,7,8)



///////////

//converting in to array add with reduce

function add3 (){
    
   const add3 = Array.from(arguments);
    console.log(add3)

    
    add3.reduce((accumulator,current,i) => {
        console.log(i+1,accumulator);
    
        return  current + accumulator
        
    },10)

   
}

add3(4,5,6,7)

// function add3 (){
//     let add3 = 0;

//     const b = Array.from(arguments);
//     for(let num of b){
//         add3 = add3 + num
//     }
//     console.log(add3);
//     return add3;
// }

// add3(2,5,6,7)



////////////////