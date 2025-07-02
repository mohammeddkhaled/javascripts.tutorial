//to under stand in better so to loupe website

//synchronous mean it will directly go to call stack 

// asynchronous means the code which does dot go directly in 'call stack' ( it will through the 'web api' and 'callback queue' and then go to 'call stack' with the help of 'eventLoop')

//event loop means it will check that 'call stack' is empty (if empty then it will take the code from 'callback queue' and send one by one to 'callstack')

// why it is going to wed api (because we set a time to executed that code because of that time the server of javascript will stop ,to avoid js engin stop that it will send to web api)

console.log('start');


function hello(){
    console.log('mohammed');
}

setTimeout(hello,2000)


setTimeout(function(){
    console.log('khaled');
},1000)





for(let i = 0; i <=4; i++){
    console.log(i);

}

console.log('end');