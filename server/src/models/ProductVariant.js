import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const ProductVariant = sequelize.define(
  "ProductVariant",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color_id: {
      type: DataTypes.INTEGER,
    },
    size_id: {
      type: DataTypes.INTEGER,
    },
    sku: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    tableName: "product_variant", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);
///

import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";

ProductVariant.belongsTo(ProductColor, { foreignKey: "color_id" });
ProductVariant.belongsTo(ProductSize, { foreignKey: "size_id" });
// //
// ProductColor.hasMany(ProductVariant, { foreignKey: "color_id" });
// ProductSize.hasMany(ProductVariant, { foreignKey: "size_id" });

export default ProductVariant;
