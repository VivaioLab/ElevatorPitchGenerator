let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');
 var   path = require('path');

// mongoose instance connection url connection
mongoose.connect('mongodb://jaynirmal:Hardik-2010@ds039427.mlab.com:39427/elevatorpitchgenerator',{
    useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @27017');
})

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

// app.use(express.static(path.join(__dirname,'public')));

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public/index.html'));     
// })

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('ElevatorPitchGenerator started listening on: ' + port);