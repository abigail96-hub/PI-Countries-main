const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true               //no almacena datos duplicados
     
    },
    difficult: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'), // valores dentro de la lista definida
      allowNull: false
    },
    duration:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: false
    },
  },
  {timestamps: false});

};