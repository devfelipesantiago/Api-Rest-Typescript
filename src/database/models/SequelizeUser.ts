// src/database/models/SequelizeBook.ts

import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeUser extends
  Model<InferAttributes<SequelizeUser>, InferCreationAttributes<SequelizeUser>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare email: string;

  declare password: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default SequelizeUser;