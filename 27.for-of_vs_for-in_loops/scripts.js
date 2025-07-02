const fruits = ['apple', 'banana','mango', 'grapes']


//for  of loop
for( const fruit of fruits){
    console.log(fruit);
}


const string ='mohammed khaled'
for(const letter of string){
    console.log(letter);
}


// for in loops (use for object we cannot use for of loop for object)

const user = {
    firstName :'mohammed',
    lastName : 'khaled',
    age :22,
    city : 'hyderabad'

}
for(const key in user ){

    console.log(key,':' ,user[key])
}