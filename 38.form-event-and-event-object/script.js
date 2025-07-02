/////////////////////////////// input event    //////////////////////////////////

// const userNameInput = document.querySelector('#username')
// const paragraph = document.querySelector('p')
// const form = document.querySelector('form')


// userNameInput.addEventListener('click', () =>{
//     console.log('inputClick');
// })


// userNameInput.addEventListener('dblclick', () =>{
//     console.log('input dblclick');
// })



// input event : is fired when we write some thing in input ,and it can be access ot stored in variable 


// let userName

// userNameInput.addEventListener('input', (e) =>{
//     console.log(e.target.value);
//     userName = e.target.value
//     paragraph.innerText = e.target.value
// })


// change event : after writing some thing in input in it will change bu clicking out of the input

// userNameInput.addEventListener('change', (e) =>{
//     console.log(e.target.value);
//     userName = e.target.value
//     paragraph.innerText = e.target.value
//    
// })


//focus event : after focusing in input it will get fired

// userNameInput.addEventListener('focus', (e) =>{
//     console.log(e.target.value);
//     console.log(e.type);
//     // userName = e.target.value;
//     paragraph.innerText = e.target.value
  
// })


// blur event : after clicking out of the input it will grt fired


// userNameInput.addEventListener('blur', (e) =>{
//     console.log(e.target.value);
//     console.log(e.type);
//     // userName = e.target.value;
//     paragraph.innerText = e.target.value
  
// })





// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const myFormData = new FormData(form)

//     for (const p of myFormData.entries()) {
//         console.log(p);
//     }
// })



// form.addEventListener('submit', (e) => {
//     e.preventDefault()
   
//     console.log('From Submitted');
// })





// form.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e.target);
//     // console.log('From Clicked');
// })







//////////////////////////// KEY BOARD EVENT/////////////////////////////////

// const h2 = document.querySelector('h2')

// h2.addEventListener('keypress' , (e) =>{
//     console.log(e.key);
// })



// window.addEventListener('keypress' , (e) =>{
//     console.log(e.key);
// })

// window.addEventListener('keyup' , (e) =>{
//     console.log(e.key);
// })


// window.addEventListener('keydown' , (e) =>{
//     console.log(e.key);
//     // console.log(e.code);
// })

