'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const result = await queryInterface.sequelize.query(`SELECT COUNT(*) FROM users WHERE role = 'admin';`)
    const count = +result[0][0].count

    if (count === 0) {
      const hashedPassword = await bcrypt.hash('12345678', 10)

      await queryInterface.bulkInsert('users', [
        {
          first_name: 'Admin',
          last_name: 'User',
          phone: '(47)9 9999-9999',
          email: 'admin@email.com',
          password: hashedPassword,
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        }
      ])
      console.log('Usuário administrador cadastrado com sucesso!')
    } else {
      console.log('Já existe um usuário administrador cadastrado!')
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, { where: { email: 'admin@email.com' } })
  }
};
