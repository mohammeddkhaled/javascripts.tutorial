
// Importing productsData from productsData.js
import productsData from './productsData.js';
console.log(productsData);


// Importing usersData from usersData.js
import { usersData } from './usersData.js'
console.log(usersData);


// Importing myName from usersData.js
import { myName } from './usersData.js';
console.log(myName);

// Importing getFirstUser from usersData.js
import getFirstUser from './usersData.js';
console.log(getFirstUser());



// Importing everything from usersData.js
// This will import all named exports and the default export as properties of the `something` object


// import * as something from './usersData.js';

// console.log(something.usersData);
// console.log(something.myName);
// console.log(something.default());