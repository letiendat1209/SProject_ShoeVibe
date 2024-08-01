import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
    },
    dateofbirth: {
      type: DataTypes.DATE,
    },
    telephone: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("customer", "admin", "seller"),
      defaultValue: "customer",
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "",
    },
  },
  {
    tableName: "user", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);
export default User;
