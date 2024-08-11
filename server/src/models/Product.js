import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const Product = sequelize.define(
  "Product",
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
      type: DataTypes.TEXT,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
    },
    discount_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "product", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

///
import ProductImages from "./ProductImages";
import ProductCategory from "./ProductCategory";
import Discount from "./discount";
import ProductVariant from "./ProductVariant";
import Collection from "./Collection";


Product.belongsTo(ProductCategory, { foreignKey: "category_id" });
Product.belongsTo(Collection, { foreignKey: "collection_id" });
Product.belongsTo(Discount, { foreignKey: "discount_id" });

Product.hasMany(ProductImages, { foreignKey: "product_id" });
ProductImages.belongsTo(Product, { foreignKey: "product_id" });

Product.hasMany(ProductVariant, { foreignKey: "product_id" });
ProductVariant.belongsTo(Product, { foreignKey: "product_id" });

import CartItems from "./CartItems";

Product.hasMany(CartItems, { foreignKey: "product_id" });
CartItems.belongsTo(Product, { foreignKey: "product_id" });

import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";

ProductVariant.belongsTo(ProductColor, { foreignKey: "color_id" });
ProductVariant.belongsTo(ProductSize, { foreignKey: "size_id" });

export default Product;
