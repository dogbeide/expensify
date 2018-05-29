const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Good success resolved data');
        // resolve('More good stuff twice'); // cannot run twice...
        resolve({
            name: 'David',
            age: 23
        })
        // reject('Bad fail reject data');
    }, 3000);
});

console.log('before');

// promise.then((data) => {
//     console.log('1', data);
// }, (error) => {
//     console.log('error:', error);
// });

// promise.then((data) => {
//     console.log('1', data);
//     return 'some data'
// }).then((someDataStr) => {
//     console.log('does this run? yes! only if the above resolves again');
//     console.log('last promise\'s returned \'some data\' =', someDataStr);
// }).catch((error) => {
//     console.log('error:', error);
// });

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('someDataStr in promise to resolve')
        }, 3000);
    });
}).then((someDataStr) => {
    console.log('does this run? yes! only if the above resolves again');
    console.log('resolved data from chained promise =', someDataStr);
}).catch((error) => {
    console.log('error:', error);
});

console.log('after');