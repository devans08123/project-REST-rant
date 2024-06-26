const db = require('../models')

db.Place.create([{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/pad-thai.jpg',
        founded: 1989
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-coffee.jpg',
        founded: 2020
    }])
    .then(() => {
        console.log('Succes!')
    })
    .catch(err => {
        console.log('Failure', err)
        process.exit()
    })