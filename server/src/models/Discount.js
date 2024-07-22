import { DataTypes } from "sequelize";
import { sequelize } from "../config/connectDatabase";

const Discount = sequelize.define(
  "Discount",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
    },
    discount_percent: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "discount", // Chỉ định rõ tên bảng
    timestamps: false,
  }
);

export default Discount;
