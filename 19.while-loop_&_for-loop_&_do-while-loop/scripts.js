//while loop

console.log('program started');

let i = 1

while(i<=100){
    console.log('hii');
    i++
}

console.log('program ended');




const friends = ['zubair','zuhair','suhaib','affan','khaled','ayaan']
let j = 0

// while(j<friends.length){
//       console.log(j+1,friends[j]);
//      j++
// }
    

// while(j<friends.length){
//       console.log(`${j + 1}.${friends[j]}`);
//      j++       
// }


while(j < friends.length){
        
    friends[j] = friends[j] + ' procodrr';

    console.log(`${j + 1}.${friends[j]}`);

    j++

}




        
// for loop


console.log('programStart');

for(let z = 0; z < 15; z++ ){
    console.log(z+1);
}

console.log('programEnded');


///////

const array = ['k','h','a','l','e','d']

for (k=0;k < array.length;k++){
    
    console.log(`${k + 1}.${array[k]}`);

}

//////even number


// for (z=0;z<=100;z+=2){
//     console.log(z);
// }


for(z=0;z<=100;z++) {
    if (z % 2===0){
        console.log(z);
    
    }
}







////////////do while loop


let a = 0

do{
    console.log(a);
    a++

}while(a < 5 )
       