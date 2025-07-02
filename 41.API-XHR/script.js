
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


/////////////////////////////////////////////

// let userData

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())

//     .then(json => {
//         console.log(json)
//         userData = json
//     })

////////////////////////////////////////////////////



const image = document.querySelector('img')
const button = document.querySelector('button')

/////////////load image on page load/////////////////////

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())

//     .then((json) => {
//         image.src = json.message
//     })



////////

//////////// load image on button click/////////////////////

// button.addEventListener('click', () => {

//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then((response) => response.json())
//         .then((json) => {
//             image.src = json.message
         
//         })

// })

////////////////old method  XMLHttpRequest (xhr)//////////////////////

//////////// load image on button click/////////////////////


// button.addEventListener('click',()=>{
//     const xhr = new XMLHttpRequest()

//     xhr.responseType = 'json'

//     // xhr.addEventListener('load',() => {
//     //     image.src = xhr.response.message
//     //     console.log(xhr);

//     // })


//     xhr.onload = () => {
//         image.src = xhr.response.message
//         console.log(xhr);
//     }


//     xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')

//     xhr.send()
// })


////////////////

////////////load user data on button click/////////////////////

// button.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest()

//     console.log(xhr);

//     xhr.responseType = 'json'

//     xhr.addEventListener('load', () => {
//         console.log(xhr.response);
//     })

//     xhr.open('GET', 'https://httpbin.org/anything')
//     xhr.send()

// })












