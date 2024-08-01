import { sequelize } from "../config/connectDatabase";
import Product from "../models/Product";
import ProductCategory from "../models/ProductCategory";
import ProductColor from "../models/ProductColor";
import ProductImages from "../models/ProductImages";
import ProductSize from "../models/ProductSize";
import ProductVariant from "../models/ProductVariant";
import Discount from "../models/discount";

export const createProduct = async (req, res) => {
  const {
    name,
    des,
    category_id,
    brand,
    price,
    discount_id,
    colors,
    sizes,
    images,
    variants,
  } = req.body;

  try {
    // Tạo sản phẩm
    const product = await Product.create({
      name,
      des,
      category_id,
      brand,
      price,
      discount_id,
    });

    // Tạo màu sắc cho sản phẩm
    if (colors && colors.length > 0) {
      const colorPromises = colors.map((color) =>
        ProductColor.create({ product_id: product.id, color_name: color })
      );
      await Promise.all(colorPromises);
    }

    // Tạo kích thước cho sản phẩm
    if (sizes && sizes.length > 0) {
      const sizePromises = sizes.map((size) =>
        ProductSize.create({ product_id: product.id, size_value: size })
      );
      await Promise.all(sizePromises);
    }

    // Tạo ảnh cho sản phẩm
    if (images && images.length > 0) {
      const imagePromises = images.map((image) =>
        ProductImages.create({
          product_id: product.id,
          image_url: image.image_url,
          is_main: image.is_main,
          image_order: image.order,
        })
      );
      await Promise.all(imagePromises);
    }

    // Tạo biến thể cho sản phẩm
    if (variants && variants.length > 0) {
      const variantPromises = variants.map((variant) =>
        ProductVariant.create({
          product_id: product.id,
          color_id: variant.color_id,
          size_id: variant.size_id,
          sku: variant.sku,
          price: variant.price,
          quantity: variant.quantity,
        })
      );
      await Promise.all(variantPromises);
    }

    return res
      .status(201)
      .json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const getAllProduct = async (req, res) => {
  const { page = 1, limit = 1000, sortBy = "id", order = "ASC" } = req.query;

  try {
    const offset = (page - 1) * limit;
    const data = await Product.findAll({
      attributes: ["id", "name", "des", "brand", "price"],
      include: [
        {
          model: ProductCategory,
          attributes: ["name"],
        },
        {
          model: Discount,
          attributes: ["name"],
        },
        {
          model: ProductImages,
          attributes: ["image_url"],
          where: { is_main: true },
          required: false,
        },
        {
          model: ProductVariant,
          attributes: ["color_id", "size_id", "sku", "price", "quantity"],
          include: [
            {
              model: ProductColor,
              attributes: ["color_name"],
            },
            {
              model: ProductSize,
              attributes: ["size_value"],
            },
          ],
        },
      ],
      limit: parseInt(limit),
      offset,
      order: [[sortBy, order.toUpperCase()]],
    });

    return res.status(200).json({
      message: "Get all products successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const getDetailProduct = async (req, res) => {
  try {
    const data = await Product.findByPk(req.params.id, {
      include: [
        {
          model: ProductImages,
          attributes: ["id", "image_url", "is_main", "image_order"],
        },
        {
          model: ProductVariant,
          include: [
            {
              model: ProductColor,
              attributes: ["id", "color_name"],
            },
            {
              model: ProductSize,
              attributes: ["id", "size_value"],
            },
          ],
        },
        {
          model: ProductCategory,
          attributes: ["id", "name"],
        },
      ],
    });

    if (!data) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Get product by id successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const {
      ProductImages: images,
      ProductVariants: variants,
      ...productData
    } = req.body;

    const product = await Product.findByPk(id, {
      include: [
        { model: ProductImages },
        {
          model: ProductVariant,
          include: [ProductColor, ProductSize],
        },
        { model: ProductCategory },
      ],
    });

    if (!product) {
      await transaction.rollback();
      return res.status(404).json({ message: "Product not found" });
    }

    // Update product
    await product.update(productData, { transaction });

    // Update or create images
    if (images && images.length > 0) {
      for (const image of images) {
        if (image.id) {
          await ProductImages.update(image, {
            where: { id: image.id },
            transaction,
          });
        } else {
          await ProductImages.create(
            { ...image, product_id: id },
            { transaction }
          );
        }
      }
    }

    // Update or create variants
    if (variants && variants.length > 0) {
      for (const variant of variants) {
        if (variant.id) {
          await ProductVariant.update(variant, {
            where: { id: variant.id },
            transaction,
          });
        } else {
          await ProductVariant.create(
            { ...variant, product_id: id },
            { transaction }
          );
        }
      }
    }

    await transaction.commit();

    const updatedProduct = await Product.findByPk(id, {
      include: [
        { model: ProductImages },
        {
          model: ProductVariant,
          include: [ProductColor, ProductSize],
        },
        { model: ProductCategory },
      ],
    });

    return res
      .status(200)
      .json({ message: "Product updated successfully", data: updatedProduct });
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    return res.status(500).json({ name: error.name, message: error.message });
  }
};
export const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const products = await Product.findAll({
      where: { category_id: categoryId },
      attributes: ["id", "name", "price"], // Chỉ lấy các thuộc tính cần thiết
      include: [
        {
          model: ProductImages,
          attributes: ["image_url"],
          where: { is_main: true }, // Lấy hình ảnh chính của sản phẩm
          required: false,
        },
        {
          model: ProductVariant,
          include: [
            {
              model: ProductColor,
              attributes: ["color_name"],
            },
          ],
        },
      ],
    });

    if (!products.length) {
      return res
        .status(404)
        .json({ message: "No products found for this category" });
    }

    return res.status(200).json({
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const data = await Product.findByPk(req.params.id);
    if (!data) {
      throw new Error("Product not found!");
    }
    // Xóa category
    await data.destroy();
    return res.status(200).json({
      message: "Product deleted successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
//
