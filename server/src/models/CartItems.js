import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const CartItems = sequelize.define(
  "CartItems",
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
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
    },
  },
  {
    tableName: "cartitems", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);
///

import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";

CartItems.belongsTo(ProductColor, { foreignKey: "color_id" });
CartItems.belongsTo(ProductSize, { foreignKey: "size_id" });
export default CartItems;
