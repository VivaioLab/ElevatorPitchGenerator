module.exports = (sequelize, Sequelize) => {
	const Login = sequelize.define('login', {
	  user_name: {
			type: Sequelize.STRING
	  },
	  password: {
			type: Sequelize.STRING
	  },
      email: {
        type: Sequelize.STRING
    }
	});
	
	return Login;
}
