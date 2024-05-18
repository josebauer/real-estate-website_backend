'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

    await queryInterface.bulkInsert('real_estates', [
      { 
        title: 'Casa de Alvenaria', 
        price: 1_500, 
        negotiation: 'rent', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: 84560000,
        address: 'Rua Jubuiklewi, nº 584', 
        district: 'Alto da Tijuca',
        city: 'Canoinhas',
        state: 'sc',
        building_area: 100, 
        total_area: 400,
        bedrooms: 3, 
        garage: 1, 
        featured: true, 
        category_id: categories[1].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        title: 'Apartamento de alto padrão', 
        price: 3_500, 
        negotiation: 'rent', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: 45560200,
        address: 'Rua Fef Jubuiklewiwfe, nº 5854', 
        district: 'Alto da Tijuca',
        city: 'São Paulo',
        state: 'sp', 
        building_area: 250, 
        bedrooms: 3, 
        suites: 2, 
        garage: 1, 
        featured: true, 
        category_id: categories[0].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        title: 'Terreno', 
        price: 100_000, 
        negotiation: 'sale', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: 82560420,
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
        price: 5_500, 
        negotiation: 'rent', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: 82560425,
        address: 'Rua Sen. Pedro, nº 222', 
        district: 'Centro',
        city: 'Chapecó',
        state: 'sc', 
        building_area: 250, 
        bedrooms: 0, 
        garage: 0, 
        featured: true, 
        category_id: categories[2].id, 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        title: 'Casa de Madeira',  
        negotiation: 'both', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
        zip_code: 82560400,
        address: 'Rua Lusdfi fifi, nº 505', 
        district: 'Centro',
        city: 'Chapecó',
        state: 'sc', 
        building_area: 60, 
        bedrooms: 1, 
        garage: 1, 
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
