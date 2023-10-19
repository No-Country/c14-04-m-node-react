import { DataTypes } from 'sequelize';
import { sequelize } from '../../../database/config.sequelize.js';
import { Category } from '../../../category/infrestructure/models/Category.model.js';

export const Stay = sequelize.define('Stay', {
  titulo: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  imagen1: {
    type: DataTypes.STRING,
  },
  imagen2: {
    type: DataTypes.STRING,
  },
  imagen3: {
    type: DataTypes.STRING,
  },
  tarifa: {
    type: DataTypes.STRING,
  },
  capacidad: {
    type: DataTypes.INTEGER,
  },
  numeroHabitaciones: {
    type: DataTypes.INTEGER,
  },
  wifi: {
    type: DataTypes.BOOLEAN,
  },
  estacionamiento: {
    type: DataTypes.BOOLEAN,
  },
  privado: {
    type: DataTypes.BOOLEAN,
  },
  pais: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
  },
  ciudad: {
    type: DataTypes.STRING,
  },
  avenida: {
    type: DataTypes.STRING,
  },
});

Category.hasOne(Stay, { foreignKey: 'categoriaId' });
Stay.belongsTo(Category, { foreignKey: 'categoriaId' });