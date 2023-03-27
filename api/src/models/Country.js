const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continents: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.FLOAT  //decimales
    },
    population: {
      type: DataTypes.INTEGER
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      
    },
    maps: {
      type: DataTypes.STRING
    },

     }, { 
      timestamps: false
    });
  };
    
  
    
