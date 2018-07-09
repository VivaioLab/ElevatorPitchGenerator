'use strict';
module.exports = function (app) {
    const questionsController = require('../controller/questions-controller');
   
    app.route('/questions')
    .post(questionsController.saveQuestions);

};