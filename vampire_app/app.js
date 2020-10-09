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
// db.Vampire.insertMany(newVamps, (err, addedVamps) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(addedVamps);
//     }
//     process.exit();
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// db.Vampire.find({gender: 'f'}, (err, femaleVamps) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(femaleVamps);
//     }
//     process.exit();
// });

// db.Vampire.find({'victims': {$gt : 500}}, (err, greaterThan) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(greaterThan);
//     }
//     process.exit();
// });

// db.Vampire.find({'victims': {$lte : 150}}, (err, lessOrEqual) => {
//     if (err) return console.log(err);

//     console.log(lessOrEqual);

//     process.exit();
// });

// db.Vampire.find({'victims': {$ne : 210234}}, (err, notEqualTo) => {
//     if (err) return console.log(err)

//     console.log(notEqualTo);

//     process.exit();
// });

// db.Vampire.find({'victims': {$gt : 150, $lt : 500}}, (err, grThanLThan) => {
//     if (err) return console.log(err);

//     console.log(grThanLThan);

//     process.exit();
// });
/////////////////////////////////////////////////
// ### Select by exists or does not exist

// db.Vampire.find({'title': {$exists : true}}, (err, titleExist) => {
//     if (err) return console.log(err);

//     console.log(titleExist);

//     process.exit();
// });

// db.Vampire.find({'victims': {$exists : false}}, (err, noVictims) => {
//     if (err) return console.log(err);

//     console.log(noVictims);

//     process.exit();
// });

// db.Vampire.find({'title': {$exists : true}, 'victims' : {$exists : false}}, (err, titleNoVic) => {
//     if (err) return console.log(err);

//     console.log(titleNoVic);

//     process.exit();
// });

// db.Vampire.find({'victims': {$exists : true, $gt: 1000}}, (err, victimsGr1000) => {
//     if (err) return console.log(err);

//     console.log(victimsGr1000);

//     process.exit();
// });

/////////////////////////////////////////////////
// ### Select with OR

// db.Vampire.find({$or : [{ location: 'New York, New York, US'} , {location: 'New Orleans, Louisiana, US'}]}, (err, fromHere) => {
//     if (err) return console.log(err);

//     console.log(fromHere);

//     process.exit();
// });

// db.Vampire.find({$or : [{ loves: 'brooding'}, { loves: 'being tragic'}]}, (err, vampLoves) => {
//     if (err) return console.log(err);

//     console.log(vampLoves);
//     process.exit();
// });

// db.Vampire.find({$or : [{victims: {$gt: 1000 }}, {loves: 'marshmallows'}]}, (err, murderMarshmallow) => {
//     if (err) return console.log(err);

//     console.log(murderMarshmallow);

//     process.exit();
// });

// db.Vampire.find({$or : [{hair_color: 'red'}, {eye_color: 'green'}]}, (err, hairEyes) => {
//     if (err) return console.log(err);

//     console.log(hairEyes);
//     process.exit();
// });


/////////////////////////////////////////////////
//### Select objects that match one of several values

// db.Vampire.find({$or : [{loves: 'frilly shirtsleeves'}, {loves: 'firlly collars'}]}, (err, frillyWilly) => {
//     if (err) return console.log(err);

//     console.log(frillyWilly);
//     process.exit();
// });

// db.Vampire.find({'loves' : 'brooding'}, (err, vampBroo) => {
//     if (err) return console.log(err);

//     console.log(vampBroo);
//     process.exit();
// });

// db.Vampire.find({$or : [{loves: 'appearing innocent'}, {loves: 'tickery'}, {loves: 'lurking in rotting mansions'}, {loves: 'R&B music'}]}, (err, lovesV) => {
//     if (err) return console.log(err);

//     console.log(lovesV);
//     process.exit();
// });

// db.Vampire.find({
//     $and : [{'loves' : 'fancy cloaks'},
//      {'loves' : {$nin: ['top hats', 'virgin blood']}}]}, (err, pickyVamp) => {
//     if (err) return console.log(err);

//     console.log(pickyVamp);
//     process.exit();
// });


/////////////////////////////////////////////////
//### Negative Selection

// db.Vampire.find({$and : [{loves: 'ribbons'}, {eye_color: { $ne: 'brown'}}]}, (err, ribbonVamp) => {
//     if (err) return console.log(err)

//     console.log(ribbonVamp);
//     process.exit();
// });

// db.Vampire.find({location: {$ne: 'Rome'}}, (err, noRome) => {
//     if (err) return console.log(err);

//     console.log(noRome);
//     process.exit();
// });

// db.Vampire.find({loves: { $nin : ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, (err, lvsNothing) => {
//     if (err) return console.log(err);

//     console.log(lvsNothing);
//     process.exit();
// });

// db.Vampire.find({victims: {$lte : 200}}, (err, underVictim) => {
//     if (err) return console.log(err);

//     console.log(underVictim);
//     process.exit();
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// db.Vampire.replaceOne({name: 'Claudia'},  
// {name: 'Eve',
// hair_color: 'purple',
// eye_color: 'orange',
// dob: new Date(1822, 5, 17, 23, 6),
// loves: ['love', 'delicious food', 'passionate kisses'],
// location: 'St. Joseph, MI, US',
// gender: 'f',
// victims: 1200,}, 
// (err, eveVamp) => {
//     if (err) return console.log(err)

//     console.log(eveVamp);
//     process.exit();
// });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// db.Vampire.findOneAndUpdate({name: 'Eve'}, {gender: 'm'}, (err, eveMale) => {
//     if (err) return console.log(err);

//     console.log(eveMale);
//     process.exit();
// });

// db.Vampire.update({name: 'Eve'}, {$rename: {'name': 'moniker'}}, (err, eveMoniker) => {
//     if (err) return console.log(err);

//     console.log(eveMoniker);
//     process.exit();
// });

// db.Vampire.updateMany({gender: 'f'}, {gender: 'fems'}, (err, femVamp) => {
//     if (err) return console.log(err);

//     console.log(femVamp);
//     process.exit();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// db.Vampire.deleteOne({hair_color: 'brown'}, (err, delBrown) => {
//     if (err) return console.log(err);

//     console.log(delBrown);
//     process.exit();
// });

db.Vampire.deleteMany({eye_color: 'blue'}, (err, fakeBlue) => {
    if (err) return console.log(err);

    console.log(fakeBlue);
    process.exit();
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
