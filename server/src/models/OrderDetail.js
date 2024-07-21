  import { DataTypes } from "sequelize";
  import { sequelize } from "../config/connectDatabase";
  import Order from "./Order";
  
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
    },
    {
      tableName: "order_detail", // Chỉ định rõ tên bảng
      timestamps: true,
    }
  );

  export default OrderDetail;
