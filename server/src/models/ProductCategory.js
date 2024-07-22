import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const ProductCategory = sequelize.define(
  "ProductCategory",
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
    des: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "product_category", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default ProductCategory;
