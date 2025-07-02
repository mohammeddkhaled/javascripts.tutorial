//different types of writing 

//setTimeout('console.log("hii");')

//setTimeout('console.log("I am khaled");',3000)

// setTimeout('console.log("hii"); console.log("i am ");',3000)


// setTimeout(`
//     console.log("mohammed")
//     console.log("khaled")`
//     ,3000
// )





const time1 = setTimeout(`console.log("khaled");`,2000)
const time2 = setTimeout(`console.log("hello world");`,2000)


const time4 = setTimeout(`console.log("hello ");`,2000)
clearTimeout(time4)



const time3 = setTimeout(a,2000)  //higher order function

function a(){
    console.log('higher order function-1');
}


setTimeout(function() {
    console.log('higher order function-2');
},5000)


// setinterval = it will print infinite times(after every given of time) it top by clearing 


const time5 = setInterval(`console.log("khaled");`,2000)
const time6 = setInterval('console.log("setinterval");',2000)

clearInterval(time5)