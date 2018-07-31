module.exports = (sequelize, Sequelize) => {
	const Questions = sequelize.define('questions', {
	  username: {
			type: Sequelize.STRING
	  },
	  problem: {
			type: Sequelize.STRING
	  },
	  solution: {
		  type: Sequelize.STRING
      },
      supporting_value: {
        type: Sequelize.STRING
    },
    proof: {
        type: Sequelize.STRING
    }
	});
	
	return Questions;
}
