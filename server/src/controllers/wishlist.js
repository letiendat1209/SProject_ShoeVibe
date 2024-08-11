import Wishlist from "../models/Wishlist";
import Product from "../models/Product";
import ProductImages from "../models/ProductImages";
import ProductVariant from "../models/ProductVariant";
import ProductColor from "../models/ProductColor";
import ProductSize from "../models/ProductSize";

export const getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findAll({
      where: { user_id: userId },
      include: [
        {
          model: Product,
          include: [
            {
              model: ProductImages,
              attributes: ["image_url"],
              where: { is_main: true },
              required: false,
            },
            {
              model: ProductVariant,
              include: [
                { model: ProductColor, attributes: ["color_name"] },
                { model: ProductSize, attributes: ["size_value"] },
              ],
              attributes: ["price", "quantity"],
            },
          ],
          attributes: ["name", "price"],
        },
      ],
    });

    res.json(wishlist);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Error fetching wishlist" });
  }
};

export const addToWishlist = async (req, res) => {
  const { product_id } = req.body;
  const userId = req.user.id;
  const newWishlistItem = await Wishlist.create({
    user_id: userId,
    product_id,
  });
  res.json(newWishlistItem);
};

export const removeFromWishlist = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  await Wishlist.destroy({ where: { id, user_id: userId } });
  res.status(204).send();
};
