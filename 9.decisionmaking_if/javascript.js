const userName = prompt ('please enter your name' ) || 'khaled'
// const userAge = +prompt ('please enter your age')

const userAge =parseInt( prompt ('please enter your age')) || '22'

console.log(`name: ${userName}`);
console.log(`age : ${userAge}`);



if(userAge <=18 && userAge >= 15){
    console.log(`${userName} is a high school student`);
    console.log(`${userName} is learning basic`);

}

if (userAge >= 18 && userAge <=24){
    console.log(`${userName} is a collage student`);
    console.log(`${userName} is learning computer science`);
}

if (userAge >= 24 && userAge <= 45){
    console.log(`${userName} is a working professional`);
    console.log(`${userName} is working on web development`);
}





