'use strict';
module.exports = function (app) {
    var questionsController = require('../controller/questions-controller');
    app.route('/api/questions/createQuestion').post(questionsController.CreateQuestion);
    app.route('/api/questions/createQuestion').get(questionsController.GetQuestions);
    app.route('/api/answers/createAnswer').post(questionsController.SaveAnswer);
    app.route('/api/questions/linkPitch').post(questionsController.LinkPitch);
    app.route('/api/questions/createUser').post(questionsController.CreateUser);
    app.route('/api/questions/createUser').get(questionsController.Getusers);
};