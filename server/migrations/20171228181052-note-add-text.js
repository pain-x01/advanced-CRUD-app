module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Notes',
      'text',
     Sequelize.STRING
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Notes',
      'text'
    )
  }
}
