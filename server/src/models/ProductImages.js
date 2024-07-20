import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const ProductImages = sequelize.define(
  "ProductImages",
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
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    is_main: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    image_order: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
  },
  {
    tableName: "product_images", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

///

export default ProductImages;
