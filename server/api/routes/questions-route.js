'use strict';
module.exports = function (app) {
    // const questionsController = require('../controller/questions-controller');
    var questionsController = require('../controller/questions-controller');
    // app.route('/questions')
    // .post(questionsController.saveQuestions);
    // app.route('/getUser')
    // .get(questionsController.getUser);
    app.route('/api/questions/create').
    post(questionsController.CreatePitch);
    // app.post('/api/questions/create',questionsController.CreatePitch);
};