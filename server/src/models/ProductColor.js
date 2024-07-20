import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const ProductColor = sequelize.define(
  "ProductColor",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color_name: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "product_color", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default ProductColor;
