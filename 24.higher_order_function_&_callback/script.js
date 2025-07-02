

function a(b){
    //console.log(typeof b);
    console.log(b);

}

a()
a('hello')                           //passing string
a({userName:'khaled',userAge:22})   //passing object
a([3,4,87,5,67])                    //passing array

a.education = 'graduate'



//higher order function 

function say(c){
    console.dir(c);

    c()
}

//call backFunction
function sayHii(){
    console.log('hii');
}

say(sayHii)





// higher order function with anonymous function 

function aa(d){
    console.dir(d);

    d()
}

                                          
aa ( function () {                                     

    console.log('buy');

}  )





//returning function with closures 


function outer(){
    const a = 4

    function parent(){
        const b = 6

        function add(){
            console.log(a + b);

        }

        return add  //add()
    }

    return parent()
}



const add1 = outer()

console.dir(add1);





// function outer(){
//     const a = 4

//     function parent(){
//         const b = 6


//         return function (){
//             console.log(a + b);
//         }

               

//     }

//     return parent()
// }


// const add2 = outer()

// console.dir(add1);



/////////////////////////////////



// function vs method

// every function is not a method but every method is a function

const maths ={
    add : function (a,b){

        return a+b 
    },

    square : function(num){
        return num ** 2
    },
    
    cube (num){
        return num **3
    },

  
}






////////////////////////////////////////////////////




//function declaration 


function square (num) {
    return num * num
}

square(4)





//function expression 

const square1 = function (a,b){
    return a,b
}

square(5,8)


// arrow function expression 

const squ = (num) => {
    return num + num             // explicit return
}

square(8)


////

const add = (num) => num + num   // implicit return(automatic)

square(3)




