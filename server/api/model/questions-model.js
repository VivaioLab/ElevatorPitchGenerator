var mongoose = require('mongoose');

//Generate the schema

var questionSchema = mongoose.Schema({
    question1: {
        type: String
    },
    question2: {
        type: String
    },
    question3: {
        type: String
    },
    question4: {
        type: String
    },
    question5:{
        type: String
    }
},{collection:'Questions'});

var Questions = module.exports = mongoose.model('Questions',questionSchema);