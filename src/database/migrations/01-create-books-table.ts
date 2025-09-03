import { DataTypes, QueryInterface } from "sequelize/types";
import { Model } from "sequelize";
import { IBook } from "../../interfaces/books/IBook";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IBook>>('books', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('books');
  },
}