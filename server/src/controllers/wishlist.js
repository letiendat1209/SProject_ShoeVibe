import Wishlist from "../models/Wishlist";

export const getWishlist = async (req, res) => {
  const userId = req.user.id; // assuming user is authenticated
  const wishlist = await Wishlist.findAll({
    where: { user_id: userId },
    include: Product,
  });
  res.json(wishlist);
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
