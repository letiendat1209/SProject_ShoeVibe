import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const Collection = sequelize.define(
  "Collection",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "collection", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default Collection;
