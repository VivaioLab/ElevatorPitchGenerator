'use strict';
const mongoose = require('mongoose'),
    Questions = mongoose.model('Questions');

//console.log(User);
/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function(error) {
    if (error) {
        throw Error(error);
    }
};
/**
 * Returns an array of sticky object matching the search parameters.
 *
 * 
 *
 * @param {function} callback {Sucess callback function}
 */

exports.addQuestions = function (params, callback) {

    let questions = new Questions(params.questions);

    let resultCallback = function (err, questions) {
        if (err) {
            console.log('Saving Questions failed');
            throwError(err);
        }
        callback(questions);
        console.log(questions);
    }
    questions.save(resultCallback);

};
exports.getUser = function (params, callback) {
    
    let resultCallback = function (err, data) {
        throwError(err);
        callback(data);
    };

    Questions.find(params, resultCallback);
};