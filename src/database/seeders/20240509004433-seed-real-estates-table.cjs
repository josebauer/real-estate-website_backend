'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

    await queryInterface.bulkInsert('real_estates', [
      { 
        title: 'Casa de Alvenaria', 
        price: 'R$ 1.500,00', 
        negotiation: 'locação', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: '84560-000',
        address: 'Rua Jubuiklewi, nº 584', 
        district: 'Alto da Tijuca',
        city: 'Canoinhas',
        state: 'sc',
        building_area: 100, 
        total_area: 400,
        bedrooms: 3, 
        garages: 1, 
        featured: true, 
        category_id: categories[1].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        title: 'Apartamento de alto padrão', 
        price: 'R$ 10.000,00', 
        negotiation: 'locação', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: '45560-200',
        address: 'Rua Fef Jubuiklewiwfe, nº 5854', 
        district: 'Alto da Tijuca',
        city: 'São Paulo',
        state: 'sp', 
        building_area: 250, 
        bedrooms: 3, 
        suites: 2, 
        garages: 1, 
        featured: true, 
        category_id: categories[0].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        title: 'Terreno', 
        price: 'R$ 100.000,00', 
        negotiation: 'venda', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: '82560-420',
        address: 'Rua Peefedxg, nº 185', 
        district: 'Efapi',
        city: 'Chapecó',
        state: 'sc',
        total_area: 600,
        featured: false, 
        category_id: categories[3].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        title: 'Sala comercial', 
        price: 'R$ 5.500,00', 
        negotiation: 'locação', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: '82560-425',
        address: 'Rua Sen. Pedro, nº 222', 
        district: 'Centro',
        city: 'Chapecó',
        state: 'sc', 
        building_area: 250, 
        bedrooms: 0, 
        garages: 0, 
        featured: true, 
        category_id: categories[2].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        title: 'Casa de Madeira',  
        negotiation: 'venda', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: '82560-400',
        address: 'Rua Lusdfi fifi, nº 505', 
        district: 'Centro',
        city: 'Chapecó',
        state: 'sc', 
        building_area: 60, 
        bedrooms: 1, 
        garages: 1, 
        featured: true, 
        category_id: categories[1].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('real_estates', null, {})
  }
};
