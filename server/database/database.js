var pg  = require('pg');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:Hardik-2010@localhost/ElevatorPitchGenerator',
{
    uri: 'postgres://jaynirmal:Hardik-2010@localhost/ElevatorPitchGenerator',
    options: {
        native: true,
        ssl: true
    }
});

module.exports = sequelize;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.questions = require('../api/model/questions-model')(sequelize, Sequelize);
db.login = require('../api/model/login-model')(sequelize,Sequelize);
db.pitch = require('../api/model/pitch-model')(sequelize,Sequelize);
db.answers = require('../api/model/answers-model')(sequelize,Sequelize);
module.exports =db;