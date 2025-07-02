
const evenNumber = [0,2,4,6,8,10,11]

const p = 'kkkkkkkkkkkkkk'

const even = evenNumber.some((num)=>{
    console.log(num);
    // return num > 15
    
})

console.log(p);



const even2 = evenNumber.some((num)=>{
    return num % 2 === 1
})

console.log(p);

const even3 = evenNumber.some((num,i) =>{
    if(num % 2 ===1){
        console.log(i);
    }
       
    return num % 2 === 1
})

console.log(p);

const even4 = evenNumber.every((num) =>{
   
    return num % 2 === 0
})