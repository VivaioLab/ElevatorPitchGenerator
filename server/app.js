let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    data = require('./database/database');
 var   path = require('path');

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Initialize app
let initApp = require('./api/app');
initApp(app);

data.sequelize.sync().then(function(){
    app.listen(port,function(){
        console.log('ElevatorPitchGenerator started listening on: ' + port);;
    })
})