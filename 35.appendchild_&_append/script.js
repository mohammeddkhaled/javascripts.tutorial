const container = document.querySelector(".container")
const card = document.querySelector(".card")

const h1 = document.querySelector("h1")

//appendChild

//1.
// container.appendChild(h1)  // adding h1 to the end of container

//2.
// h1.cloneNode(true)
// container.appendChild(h1.cloneNode(true))  // cloning(copying) h1 and adding to container


//3.
// container.appendChild(card.cloneNode(true)) // same copying card and adding to container 
// container.appendChild(card.cloneNode(true))


//4. adding card using for loops

// for(let i=2; i<=100 ;i++ ){

//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.appendChild(newCard)
// }




//append            by using append we can add anyting  like string etc and append multiple element at once

//1.
// container.append('hello world')

//2.
// const newTextNode = document.createTextNode('hello world')
//  container.appendChild(newTextNode) 

//3.
container.append('hello' , h1 , 'world')