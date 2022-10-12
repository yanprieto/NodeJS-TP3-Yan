'use strict'

module.exports = (sequelize, DataTypes) => {

  let Cirugia = sequelize.define('cirugia', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    patologia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true,
    freezeTableName: true
  })

  

  return Cirugia
}