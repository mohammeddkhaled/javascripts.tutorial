
// fetch('https://dummyjson.com/products').then((res)=> {
//    return res.json()
// }).then((data) => {
//    console.log(data);
// })


//implicit return    //get method

// fetch('https://dummyjson.com/products')
//  .then((res)=> res.json())
//  .then((products) => console.log(products))



// post method

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);


// fetching data using promises


function fetch(method, url) {

    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response)
        })

    })

    xhr.open(method, url)
    xhr.send()
    return promise
}


fetch('GET', 'https://dummyjson.com/users')
  .then((usersData) => fetch('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
  .then((postsData) => fetch('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
  .then((commentsData) => fetch('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
  .then((userData) => console.log(userData))
  .catch((err) => console.log(err))