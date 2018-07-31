module.exports = (sequelize, Sequelize) => {
	const Pitch = sequelize.define('pitch', {
	  user_id: {
			type: Sequelize.INTEGER
	  },
	});
	
	return Pitch;
}
