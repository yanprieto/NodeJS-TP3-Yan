'use strict';

const models = require('../models/index')

module.exports = {
   up (queryInterface, Sequelize) {
    
    return Promise.all([  

      models.paciente.findOrCreate({
        where:{          
          id:"1"
        },
        default:{
          nombre:"Placebo",
          patologia:"Loquitis",
          duracion:"10"
        }   
      }),

      models.paciente.findOrCreate({
        where:{          
          id:"2"
        },
        default:{
          nombre:"Corticoidal",
          patologia:"Inflamacion",
          duracion:"4"
        }   
      }) 
    
      ])

    },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
