'use strict';
module.exports = function (app) {
    var questionsController = require('../controller/questions-controller');
    app.route('/api/questions/create-question').post(questionsController.createquestion);
    app.route('/api/questions/create-question').get(questionsController.getquestions);
    app.route('/api/answers/create-answer').post(questionsController.saveanswer);
    app.route('/api/questions/link-pitch').post(questionsController.linkpitch);
    app.route('/api/questions/create-user').post(questionsController.createuser);
    app.route('/api/questions/create-user').get(questionsController.getusers);
    app.route('/api/Email/send-mail').post(questionsController.sendemail);
};