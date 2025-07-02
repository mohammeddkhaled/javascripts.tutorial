const userName = prompt ('please enter your name' )
// const userAge = +prompt ('please enter your age')

const userAge =parseInt( prompt ('please enter your age'))

console.log(`name: ${userName}`);
console.log(`age : ${userAge}`);


 
if (userAge >=1  && userAge <=5 ){
    console.log(`${userName} is a child`);
    console.log(`${userName} is playing`);
}
else if(userAge <=18 && userAge >= 15){
    console.log(`${userName} is a high school student`);
    console.log(`${userName} is learning basic`);
}
else if (userAge >= 18 && userAge <=24){
    console.log(`${userName} is a collage student`);
    console.log(`${userName} is learning computer science`);
}
else if (userAge >= 24 && userAge <= 45){
    console.log(`${userName} is a working professional`);
    console.log(`${userName} is working on web development`);
}
else if (userAge >= 46 && userAge <100){
    console.log(`${userName} is a retired `);
    console.log(`${userName} is reading a news paper`);
}
else if (userAge >100){
    console.log(`${userName} is a immortal`);
}
else {
    console.log('please enter a valid age');
}



// truthy or falsy


// if (0){
//     console.log('hello');
// }else {
//     console.log('world');
// }



// if (userName){
//      console.log(`name: ${userName}`);
// }


// if ( userAge){
//     console.log(`age : ${userAge}`);
// }