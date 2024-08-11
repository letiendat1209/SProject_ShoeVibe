import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const Wishlist = sequelize.define(
  "Wishlist",
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    added_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "wishlist", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

// Define association
import Product from "./Product";
Wishlist.belongsTo(Product, { foreignKey: "product_id" });

export default Wishlist;