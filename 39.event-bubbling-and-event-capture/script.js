const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const pink = document.querySelector('.pink')

document.addEventListener('click',(e)=>{
    console.log('5.document event listener');
},)


document.body.addEventListener('click',(e)=>{
    console.log('4.body event listener');
},)


green.addEventListener('click',(e)=>{
    console.log('3.green event listener');
},)


pink.addEventListener('click',(e)=>{
    console.log('2.pink event listener');
},)


blue.addEventListener('click',(e)=>{
    console.log('1.blue event listener');
},)



// blue.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     console.log('1.blue event listener');
//  },{capture:true})

















