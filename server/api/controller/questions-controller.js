'use strict';
const questionsService = require('../service/questions-service');

/**
 * Returns a list of stickies in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.saveQuestions = function (request, response) {
    let params = request.body,
        callback = function (data) {
            response.status(200);
            response.json(data);
        };
        questionsService.addQuestions(params, callback);
};