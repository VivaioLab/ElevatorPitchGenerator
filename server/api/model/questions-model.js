module.exports = (sequelize, Sequelize) => {
    const Questions = sequelize.define('questions', {
        
        question: {
            type: Sequelize.STRING
        },
        hint: {
            type: Sequelize.STRING
        },
        modal_text: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.STRING
        },
        icon_name: {
            type: Sequelize.STRING
        }
        
    });

    return Questions;
}
