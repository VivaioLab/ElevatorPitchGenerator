'use strict';
module.exports = function (app) {
    var questionsController = require('../controller/questions-controller');
    app.route('/api/questions/create').
    post(questionsController.CreatePitch);
};