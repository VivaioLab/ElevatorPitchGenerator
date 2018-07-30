'use strict';
module.exports = function(app) {

    // let Questions = require('./model/questions-model');

    let loginRoutes = require('./routes/questions-route');
    loginRoutes(app);
}