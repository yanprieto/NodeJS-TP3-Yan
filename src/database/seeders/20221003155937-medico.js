'use strict';

const models = require('../models/index')

module.exports = {
   up (queryInterface, Sequelize) {
   
    return Promise.all([  

      models.medico.findOrCreate({
        where:{          
          id:"1"
        },
        default:{
           nombre: "Yandira",
           apellido: "Prieto",
           email: "yprieto@mgob.gba.gob.ar",
           especialidad: "dermatologia",
           tiempo_trabajando: "3"
         
        }
      }),

      models.medico.findOrCreate({
        where:{          
          id:"2"
        },
        default:{
           nombre: "Marta",
           apellido: "Rosales",
           email: "mrosales@mgob.gba.gob.ar",
           especialidad: "cirujana",
           tiempo_trabajando: "3"
          
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
