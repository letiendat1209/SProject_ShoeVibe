import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled"
      ),
      allowNull: false,
    },
    shipping_address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.ENUM("express", "Standard"),
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.ENUM("paid", "unpaid"),
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
    tableName: "order", // Chỉ định rõ tên bảng
    timestamps: true,
  }
);

//
import OrderDetail from './OrderDetail';

Order.hasMany(OrderDetail, {
  foreignKey: 'order_id',
  as: 'orderDetails',
});

OrderDetail.belongsTo(Order, {
  foreignKey: 'order_id',
  as: 'order',
});
export default Order;
