const userName = 'khaled'
const userAge = 22


console.log(userName);
console.log(userAge);






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
    
    if (userAge >=20){
        console.log('he is above 19');
    }
    else{
        console.log('he is below 20');
    }

    if(userName.length > 5){
        console.log('username has length greater then 5');
    }
    else{
        console.log('username is very short');
    }


}
