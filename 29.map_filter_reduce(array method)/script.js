

const months = ['January', 'February', 'March', 'April', 'May', 'December']


//////////////// for each  ///////////

// const capitalMonths = months.forEach((month, index) => {
//     console.log(index + 1, month)
//     return month.toUpperCase()
//   })


/////////////  map /////////

const capitalMonths = months.map((month, index, array) => {
    console.log(index + 1, month)
    // console.log(array);
    return month.toUpperCase()
})




/////////   filter ///////////

// const filteredMonths = months.filter((month, index, array) => {
//     console.log(month.toLocaleLowerCase().includes('m'))
//     // console.log(array);
//     return month.toLocaleLowerCase().includes('m')
//   })


const filteredMonths = months.filter((month, index, array) => {

    console.log(month.toLocaleLowerCase().includes('f'))
    // console.log(array);
    return false
})



const students = [
    {
        name: 'Akash',
        age: 21,
    },
    {
        name: 'Adarsh',
        age: 17,
    },
    {
        name: 'Amir',
        age: 19,
    },
    {
        name: 'Raman',
        age: 24,
    },
    {
        name: 'Nidhi',
        age: 16,
    },
]



const adultStudents = students.filter((student) => {
    return student.age >= 18
}).map((student) => {
    return student.name
}).filter((student) => {
    return student.includes('A')
})

console.log(adultStudents);