export const addToCart = (req, res) => {
  const { productId, quantity, color, size } = req.body;

  if (!req.session.cart) {
    req.session.cart = [];
  }

  const cartItem = req.session.cart.find(
    (item) =>
      item.productId === productId && item.color === color && item.size === size
  );

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    req.session.cart.push({ productId, quantity, color, size });
  }

  res
    .status(200)
    .json({ message: "Product added to cart", cart: req.session.cart });
};

export const getCart = (req, res) => {
  const cart = req.session.cart || [];
  res.status(200).json({ cart });
};

export const removeFromCart = (req, res) => {
  const { productId, color, size } = req.body;

  if (!req.session.cart) {
    return res.status(200).json({ message: "Cart is empty" });
  }

  req.session.cart = req.session.cart.filter(
    (item) =>
      !(
        item.productId === productId &&
        item.color === color &&
        item.size === size
      )
  );

  res
    .status(200)
    .json({ message: "Product removed from cart", cart: req.session.cart });
};

export const clearCart = (req, res) => {
  req.session.cart = [];
  res.status(200).json({ message: "Cart cleared", cart: req.session.cart });
};
