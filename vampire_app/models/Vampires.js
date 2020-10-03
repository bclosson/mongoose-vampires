const mongoose = require('mongoose');
const validator = require('validator');

const vampireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    hair_color: {type: String, default: 'blond'},
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: {
        number: Number,
        min: 0,
    },
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;