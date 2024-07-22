import ProductSize from "../models/ProductSize";

export const create = async (req, res) => {
  try {
    //Validate here

    const data = await ProductSize.create(req.body);
    if (!data) {
      throw new Error("Failed to create Size!");
    }
    return res.status(200).json({
      message: "Size created successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const data = await ProductSize.findAll(req.body);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Get all size successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const getDetail = async (req, res) => {
  try {
    const data = await ProductSize.findByPk(req.params.id);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Size created successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const data = await ProductSize.findByPk(req.params.id, { new: true });
    if (!data) {
      throw new Error("Size not found!");
    }
    // Cập nhật dữ liệu mới vào Size
    await data.update(req.body);
    return res.status(200).json({
      message: "Size updated successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const data = await ProductSize.findByPk(req.params.id);
    if (!data) {
      throw new Error("Size not found!");
    }
    // Xóa Size
    await data.destroy();
    return res.status(200).json({
      message: "Size deleted successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
