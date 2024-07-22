import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const ProductSize = sequelize.define(
  "ProductSize",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    size_value: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "product_size", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default ProductSize;
