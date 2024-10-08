import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";
import Order from "./Order";
import ProductVariant from "./ProductVariant";

const OrderDetail = sequelize.define(
  "OrderDetail",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    product_variant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "order_detail",
    timestamps: true,
    createdAt: "created_at", // Sử dụng tên trường tùy chỉnh
    updatedAt: "updated_at", // Sử dụng tên trường tùy chỉnh
  }
);

OrderDetail.belongsTo(ProductVariant, { foreignKey: "product_variant_id" });

export default OrderDetail;
