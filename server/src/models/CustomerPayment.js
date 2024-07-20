import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const CustomerPayment = sequelize.define(
  "CustomerPayment",
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
    payment_type: {
      type: DataTypes.ENUM("credit_card", "debit_card", "paypal"),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(50),
    },
    account_no: {
      type: DataTypes.STRING(50),
    },
    expiry: {
      type: DataTypes.DATE,
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "customer_payment", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default CustomerPayment;