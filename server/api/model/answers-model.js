module.exports = (sequelize, Sequelize) => {
    const Answers = sequelize.define('answers', {
        answer: {
            type: Sequelize.STRING
        },
        question_id: {
            type: Sequelize.INTEGER
        },
        pitch_id: {
            type: Sequelize.INTEGER
        },
        
    });

    return Answers;
}
