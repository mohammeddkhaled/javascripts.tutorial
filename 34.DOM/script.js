document.body.children[0]                                              // selecting ang element

document.body.children[0].innerText = 'world'                         // before = frontend developer

document.body.children[2].style.backgroundColor = 'pink'             //before = no color


document.body.children[2].src ='image url'                         //change photo



document.getElementsByTagName('img')                                  // short cut to access ,it will show all tag with 'imag' name


document.getElementsByClassName('container')                        // it will select all element which class name has 'container'

document.getElementById('container')                               // it will select all element which id name  has 'container'



document.querySelector('.class')                                // it will select the class, id, etc. it select only one class or id with the given name
document.querySelector('#id')

document.querySelectorAll('.class')                           //it will select the class, id, etc. it select all the  class or id with the given name
document.querySelectorAll('[alt=javascripts]')
document.querySelectorAll('ul')






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// REPLACING AN IMAGE 

const beforeImg = document.querySelectorAll('img')

const natureImage = [
   ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8hYoztRm6_iq1wDyAQJvvP4IXRinSSLnlUA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfXchhxCX-49j7Za9B9XNwNFcP8hDFKBAZQ&s'
]

//1.
// beforeImg[0].src = natureImage[0]
// beforeImg[1].src = natureImage[1]
// beforeImg[2].src = natureImage[2]


//2.
// for (let i=0; i<beforeImg.length; i++){
//     beforeImg[i].src = natureImage[i]
// }


//3.
beforeImg.forEach((image, i) =>{

    image.src = natureImage[i]

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////  different between innerText, innerHtml,  innerContent

const paragraph = document.querySelector('p')  //selecting p tag 

const innerText = paragraph.innerText         
console.log(innerText);

console.log('========================================================================');

const innerHtml = paragraph.innerHTML
console.log(innerHtml);

console.log('========================================================================');

const textContent = paragraph.textContent
console.log(textContent);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////// getAttribute and setAttribute
  
/////                                      attributeName      value

// document.querySelector(h1).getAttribute( 'title',   'hello world')   

// document.querySelector(h1).setAttribute('title'  ,  'helloworld')

// document.querySelector(h1).id = hii

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////// styling using javascripts

const allLinks = document.querySelectorAll('a')  // changing the style of <a> tag

////////// using for loop


// for (let i = 0 ; i < allLinks.length ; i++ ){
//     allLinks[i].style.color = 'teal'
//     allLinks[i].style.textDecoration = 'none'
//     allLinks[i].style.fontFamily ='cursive'
//     allLinks[i].style.fontWeight = '1000'
// }


///////// using for of loop

for (const link of allLinks){
    //1  for of loop

    // link.style.color = 'teal'
    // link.style.textDecoration = 'none'
    // link.style.fontFamily = 'cursive'
    // link.style.fontWeight ='1000'

    //2 

    // link.style.cssText = `
    // color : teal;
    // text-decoration : none;
    // font-family : cursive;
    // font-weight : 1000; `
    
    //3

    // link.className = 'green-link'
    link.className = 'wavy-link'           //if we use this it over right it 

    //4

    // link.setAttribute('class' ,'green-link')

    //5

    link.classList.add('green-link')    // adding the class to an element, style is written in css file and that class is used here to apply style
    link.classList.add('my-link')

    // document.querySelector(h1).classlist.remove('classname')
    // document.querySelector(h1).classlist.toggle('classname')  // if the class is there it will remove and if there is no class it will add the class

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
