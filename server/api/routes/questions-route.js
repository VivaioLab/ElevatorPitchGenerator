'use strict';
module.exports = function (app) {
    var questionsController = require('../controller/questions-controller');
    var loginController = require('../controller/login-controller');
    var answersController = require('../controller/answer-controller');
    var pitchController = require('../controller/pitch-controller');
    var sendemailController = require('../controller/send-email-controller');

  // send-mail
    app.route('/api/Email/send-mail').post(sendemailController.sendemail);

    //login routes
    app.route('/api/questions/create-user').post(loginController.createuser);
    app.route('/api/questions/create-user').get(loginController.getusers);
    app.route('/api/questions/get-user-by-email').post(loginController.getusersbyemail);

    //pitch routes
    app.route('/api/questions/link-pitch').post(pitchController.linkpitch);

    //question routes
    app.route('/api/questions/create-question').post(questionsController.createquestion);
    app.route('/api/questions/create-question').get(questionsController.getquestions);
    app.route('/api/questions/update-question').post(questionsController.updatequestions);
    app.route('/api/answers/get-question-by-id').post(questionsController.getquestionbyID);

    //answers routes
    app.route('/api/answers/create-answer').post(answersController.saveanswer);
    app.route('/api/answers/create-answer').get(answersController.getanswers);
    app.route('/api/answers/get-answer-by-id').post(answersController.getanswerbyID);
    app.route('/api/answers/update-answer').post(answersController.updateanswer);
};