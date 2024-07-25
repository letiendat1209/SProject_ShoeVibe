const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const ProductCategory = require("./ProductCategory");
const Discount = require("./discount");
const Product = require("./product");
const ProductImages = require("./ProductImages");
const ProductColor = require("./ProductColor");
const ProductSize = require("./ProductSize");
const ProductVariant = require("./ProductVariant");
const User = require("./User");
const Order = require("./Order");
const OrderDetail = require("./OrderDetail");
const CustomerAddress = require("./CustomerAddress");
const CustomerPayment = require("./CustomerPayment");
const Blog = require("./Blog");
const Wishlist = require("./wishlist");
const ProductReview = require("./productReview");

// Define associations ( Xác định liên kết - Ràng buộc -)

Product.belongsTo(ProductCategory, { foreignKey: "category_id" });
Product.belongsTo(Discount, { foreignKey: "discount_id" });

ProductImages.belongsTo(Product, { foreignKey: "product_id" });

ProductVariant.belongsTo(Product, { foreignKey: "product_id" });
ProductVariant.belongsTo(ProductColor, { foreignKey: "color_id" });
ProductVariant.belongsTo(ProductSize, { foreignKey: "size_id" });

Order.belongsTo(User, { foreignKey: "user_id" });
OrderDetail.belongsTo(Order, { foreignKey: "order_id" });
OrderDetail.belongsTo(ProductVariant, { foreignKey: "product_variant_id" });

CustomerAddress.belongsTo(User, { foreignKey: "user_id" });
CustomerPayment.belongsTo(User, { foreignKey: "user_id" });

Blog.belongsTo(User, { foreignKey: "author_id" });

Wishlist.belongsTo(User, { foreignKey: "user_id" });
Wishlist.belongsTo(Product, { foreignKey: "product_id" });

ProductReview.belongsTo(Product, { foreignKey: "product_id" });
ProductReview.belongsTo(User, { foreignKey: "user_id" });

export default {
  ProductCategory,
  Discount,
  Product,
  ProductImages,
  ProductColor,
  ProductSize,
  ProductVariant,
  User,
  Order,
  OrderDetail,
  CustomerAddress,
  CustomerPayment,
  Blog,
  Wishlist,
  ProductReview,
  sequelize,
};
