'use strict';
module.exports = function(app) {

    let loginRoutes = require('./routes/questions-route');
    loginRoutes(app);
}