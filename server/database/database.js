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