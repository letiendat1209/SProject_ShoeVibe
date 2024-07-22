import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "cart", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default Cart;
