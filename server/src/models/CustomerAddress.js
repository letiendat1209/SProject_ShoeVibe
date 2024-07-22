import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const CustomerAddress = sequelize.define(
  "CustomerAddress",
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
    country: {
      type: DataTypes.STRING(50),
    },
    city: {
      type: DataTypes.STRING(50),
    },
    district: {
      type: DataTypes.STRING(50),
    },
    ward: {
      type: DataTypes.STRING(50),
    },
    address_line1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address_line2: {
      type: DataTypes.STRING(255),
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "customer_address", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default CustomerAddress;
