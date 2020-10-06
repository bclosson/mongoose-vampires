// 1. Require Mongoose
const mongoose = require('mongoose');

// 2. Require your Model
const db = require('./models');

// 3. Require your extra data source
const vampires = require('./populateVampires');

// 4. Connect your database

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
const newVampires = [{
        name: 'Geraldine Pertaka',
        hair_color: 'white',
        eye_color: 'green',
        dob: new Date(367, 4, 22, 6, 55),
        loves: ['pain','heartache'],
        location: 'Seattle, Washington, US',
        gender: 'f',
        victims: 1000,
    },
    {
        name: 'Victor Frankenstein',
        hair_color: 'blond',
        eye_color: 'black',
        dob: new Date(1794, 5, 19, 9, 22),
        loves: ['hunchbacks', 'brains'],
        location: 'Transylvania, Romania',
        gender: 'm',
        victims: 420,
    },
    {
        name: 'Santanico Pandemonium',
        hair_color: 'red',
        eye_color: 'yellow',
        dob: new Date(1922, 9, 19, 22, 3),
        loves: ['hard life', 'mischief'],
        location: 'El Rey, Mexico',
        gender: 'f',
        victims: 324,
    },
    {
        name: 'Lord Ruthven',
        hair_color: 'brown',
        eye_color: 'silver',
        dob: new Date(1734, 3, 24, 17, 8),
        loves: ['blood', 'bats', 'fresh kills'],
        location: 'Cambridge, England',
        gender: 'm',
        victims: 937,
    },
];

const newVamps = newVampires;
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// db.Vampire.insertMany(vampires, (err, addedVampires) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(addedVampires);
//     }
//     process.exit(); 
// });
// ### Add some new vampire data
db.Vampire.insertMany(newVamps, (err, addedVamps) => {
    if (err) {
        console.log(err);
    } else {
        console.log(addedVamps);
    }
    process.exit();
});
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
