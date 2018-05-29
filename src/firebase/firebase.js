import firebase from 'firebase'

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyC7rDF91UUA_vyryTVzNP_qlnxDayRAa9U",
//     authDomain: "xpensify-dbdc6.firebaseapp.com",
//     databaseURL: "https://xpensify-dbdc6.firebaseio.com",
//     projectId: "xpensify-dbdc6",
//     storageBucket: "xpensify-dbdc6.appspot.com",
//     messagingSenderId: "610710318043"
// };

// Initialize Firebase w/ environment variables
var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db as default }

// db.ref().set({
//     name: 'David Ogbeide',
//     age: 23,
//     isHuman: true,
//     stressLevel: 5,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data has been saved')
// }).catch((error) => {
//     console.log('Fail', error);
// })

// db.ref().set('String thing here ding!') // overwrite all with string
// db.ref().set({ age: 24 }) // overwrite all with age object

// db.ref('age').set(24) // change age
// db.ref('location/city').set('Vancouver') // change location.city

// db.ref('attributes').set({
//     height: 188,
//     weight: 85
// }).then(() => {
//     console.log('Set attributes success');
// }).catch((error) => {
//     console.log(error);
// })

// db.ref('isHuman').remove()
//     .then(() => {
//         console.log('Removed isHuman');
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// db.ref('isHuman').set(null) // same thing as remove()

// db.ref().update({
//     name: 'Boyowa',
//     age: 99,
//     job: 'Software Engineer', // update can create new attrs too
//     isHuman: null // can delete stuff too
// })

// db.ref().update({
//     job: 'Music Producer',
//     // location: {
//     //     city: 'Turonno'
//     //     // country: gets updated too, update only does ROOT level updates
//     // }
//     'location/city': 'Turonno' // does what we want, leaves country untouched
// })

// db.ref().update({
//     stressLevel: 7,
//     'job/company': 'Blackberry',
//     'location/city': 'Waterloo'
// })

// // READ from db once
// db.ref('location').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// // subscribe to root, returns the passed in callback fn
// const onValueChange = db.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data:', e);
// })

// setTimeout(() => {
//     db.ref('age').set(24)
// }, 3333)

// setTimeout(() => {
//     db.ref().off() // unsubscribe from root
// }, 6666)

// setTimeout(() => {
//     db.ref('age').set(26)
// }, 9999)

// db.ref().on('value', (snapshot) => {
//     const data = snapshot.val()
//     const name = data.name
//     const job = data.job.title
//     const company = data.job.company

//     console.log(`${name} is a ${job} at ${company}.`);
// })

// // creates notes with sub objects ref'd: 0, 1, 2... makes internal ids useless
// const notes = [{
//     id: '12',
//     title: 'first noe',
//     body: 'bodysdfsdf'
// }, {
//     id: '17',
//     title: '2nd noe',
//     body: 'bodysdffssfsdf'
// }]

// db.ref('notes').set(notes)

// // this is what we need!
// const firebaseNotes = {
//     notes: {
//         asf23esdf: {
//             title: 'note 1',
//             body: 'fyaay  sufs yays'
//         },
//         eftd3478fs: {
//             title: 'note 2',
//             body: 'fyaagrtts yays'
//         }
//     }
// }

// // creates what we need
// db.ref('notes').push({
//     title: 'Note 1',
//     body: 'fksf yaaya notes things'
// })

// db.ref('notes').push({
//     title: 'Note 2',
//     body: 'fish tree coupon road'
// })

// db.ref('notes/-LD-_Cxk7Md4c8q2nbxc').update({
//     body: 'brave speaker knife river'
// })


// import expenses from '../tests/fixtures/expenses'

// db.ref('expenses').push(expenses[0])
// db.ref('expenses').push(expenses[1])
// db.ref('expenses').push(expenses[2])

// // console.log all expenses to an array
// db.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })

//         console.log(expenses);
//     })

// // SUBSCRIBE to expense changes, console.log to screen
// db.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     })
//     console.log(expenses);
// })

// db.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// db.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
