/*** OBJECTS ***/

// const person = {
//     name: 'David',
//     age: 23,
//     location: {
//         city: 'Toronto',
//         temp: 11
//     }
// }

// console.log(`${person.name} is ${person.age}.`);

// const name = person.name
// const age = person.age
// const { name: firstName = 'Anon', age } = person
// console.log(`${firstName} is ${age}.`)

// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} degrees in ${person.location.city}`)
// }
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName);


/*** ARRAYS ***/

const address = ['123 Town Street', 'Toronto', 'ON', 'M6H4B8']
// console.log(`You are in ${address[1]}, ${address[2]}`)

// const [street, city, province, postal] = address
const [, city, province = 'AB'] = address
console.log(`You are in ${city}, ${province}`);

const item = ['Coffee', 2.00, 2.50, 2.75]
const [itemName,,priceMed] = item
console.log(`A ${itemName} costs $${priceMed}`);


const add = ({ a, b }, c) => (
    a + b + c
)
