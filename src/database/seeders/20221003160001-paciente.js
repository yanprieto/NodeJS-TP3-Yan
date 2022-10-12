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
           nombre:"Rogelio",
           apellido:"Gonzalez",
           email:"rgonzalez@mgob.gba.gob.ar",
           edad:"34",
           obra_social:"IOMA"
         
        }
      }),

      models.paciente.findOrCreate({
        where:{          
          id:"2"
        },
        default:{
          nombre:"Lisandro",
          apellido:"Dade",
          email:"ldade@mgob.gba.gob.ar",
          edad:"55",
          obra_social:"OSDE"
       
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
