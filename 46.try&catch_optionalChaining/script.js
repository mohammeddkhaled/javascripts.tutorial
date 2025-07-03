// const user = {
//   name: 'khaled',
//   age: 34,
// }

// try {
//   console.log(user.address)
// } catch (err) {
//   console.dir(err.message)
// } finally {
//   console.log('hello world')
// }

// console.log(3 + 7)



async function makeAsyncRequest() {
  try {
    const url =
      'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

makeAsyncRequest()


//optional chaining

const user = {
  firstName: 'mohammed',
  lastName: 'khaled',
  age: 25,
  address: {
    city: 'hyderabad'
  },
  getFullName: function() {
    return user.firstName + ' ' + user.lastName
  }
}

const a = 'city'

// console.log(user.address && user.address.city)


// console.log(user.getFullName?.());


// console.log(user.address?.city)
// console.log(user.address?.[a])
