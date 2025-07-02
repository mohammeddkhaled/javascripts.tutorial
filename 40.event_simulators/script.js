// const addCardBtn = document.querySelector('.card')
// const container = document.querySelector('.container')
// const input = document.querySelector('input')
// const form = document.querySelector('form')

// let count = 1

// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })
//////////////////////////////event simulator/////////////////////////////////////

// for(let i=1; i<=1000; i++){
//   addCardBtn.click()
// }


// const intervalId = setInterval(()=>{
//     if (count>999){
//        clearInterval(intervalId)
//     }
//     addCardBtn.click()
// },5)



// setTimeout(() => {
//     input.focus()
//     console.log('Input Focused');
// }, 1000)


// setTimeout(() => {
//     input.blur()
//     console.log('Input Blurred');
// }, 3000)



// setTimeout(() => {
//     form.submit()
//     console.log('Form Submitted');
// }, 3000)

// form.reset()




///////////////////////////////////////event delegation//////////////////////////////////////////



const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++


    // newCard.addEventListener('click',()=>{
    //     newCard.remove()
    // })


    container.append(newCard)
})

container.addEventListener('click',(e)=>{
    if( e.target !== container){
        e.target.remove()
    }
})
