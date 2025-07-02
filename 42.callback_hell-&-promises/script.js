//////callback hell////////////

// const button = document.querySelector('button');
// const image = document.querySelector('img')


// function makeHttpRequest(method, url, callback) {


//     const xhr = new XMLHttpRequest()

//     xhr.responseType = 'json'

//     xhr.addEventListener('load', () => {

//         callback(xhr.response)

//     })

//     xhr.open(method, url)
//     xhr.send()

// }

// makeHttpRequest('GET', 'https://dummyjson.com/users', (userdata) => {
//     console.log(userdata);
//     makeHttpRequest('GET', `https://dummyjson.com/posts/user/${userdata.users[0].id}`, (userPost) => {
//         console.log(userPost);
//         makeHttpRequest('GET', `https://dummyjson.com/comments/post/${userPost.posts[0].id}`, (userComments) => {
//             console.log(userComments);
//             makeHttpRequest('GET', `https://dummyjson.com/users/${userComments.comments[0].user.id}`, (user) => {
//                 console.log(user);
//             });

//         });

//     });

// });





////////promises////////////


const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener('click', () => {
    resolve('Promise Resolveddd')
  })

  rejectBtn.addEventListener('click', () => {
    reject('Promise Rejected')
  })
})

p.then((data) => {
  console.log(data);
  return 155
}).then((data) => {
  console.log(data);
  return 'Anurag'
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

