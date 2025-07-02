

// function introduceMe (username){
//     console.log('Hi,');
//     console.log(`${'My name is'} ${username} `);
//     console.log('I am a Web Developer');
// }


// function introduceMe (username = 'procoder'){
//     console.log('Hi,');
//     console.log(`${'My name is'} ${username} `);
//     console.log('I am a Web Developer');
// }

//                OR


function introduceMe (username,profession ){
    console.log('Hi,');
    console.log(`${'My name is'} ${username || 'procode'} `);

    console.log(`I am a ${profession ||' not graduate'}`);
}

introduceMe('khaled' , 'web developer')
introduceMe('zubair' , 'data analysis')
introduceMe('suhaib', 'app developer')
introduceMe()





//    return key word

function name (a,b){
    
    return a + b
}

const result=(5 + 45)
console.log(result)


//////

function  addTwoNumber( c,d){

    return c + d

}

const add = addTwoNumber (addTwoNumber(4,65),addTwoNumber(76,5))
console.log(add);



