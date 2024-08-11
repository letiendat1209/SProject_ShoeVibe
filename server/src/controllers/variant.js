import ProductVariant from "../models/ProductVariant";

// Xóa variant theo ID
export const deleteVariantById = async (req, res) => {
  const { id } = req.params;

  try {
    const variant = await ProductVariant.findByPk(id);

    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    await variant.destroy();

    res.status(200).json({ message: "Variant deleted successfully" });
  } catch (error) {
    console.error("Error deleting variant:", error);
    res.status(500).json({ message: "Error deleting variant", error });
  }
};

// Cập nhật variant theo ID
export const updateVariantById = async (req, res) => {
  const { id } = req.params;
  const { color_id, size_id, sku, price, quantity } = req.body;

  try {
    const variant = await ProductVariant.findByPk(id);

    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    variant.color_id = color_id || variant.color_id;
    variant.size_id = size_id || variant.size_id;
    variant.sku = sku || variant.sku;
    variant.price = price || variant.price;
    variant.quantity = quantity || variant.quantity;

    await variant.save();

    res.status(200).json({ message: "Variant updated successfully", variant });
  } catch (error) {
    console.error("Error updating variant:", error);
    res.status(500).json({ message: "Error updating variant", error });
  }
};
