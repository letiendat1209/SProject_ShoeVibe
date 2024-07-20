import ProductColor from "../models/ProductColor";

export const create = async (req, res) => {
  try {
    //Validate here

    const data = await ProductColor.create(req.body);
    if (!data) {
      throw new Error("Failed to create Color!");
    }
    return res.status(200).json({
      message: "Color created successfully",
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
    const data = await ProductColor.findAll(req.body);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Get all Color successfully",
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
    const data = await ProductColor.findByPk(req.params.id);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Color created successfully",
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
    const data = await ProductColor.findByPk(req.params.id, { new: true });
    if (!data) {
      throw new Error("Color not found!");
    }
    // Cập nhật dữ liệu mới vào Color
    await data.update(req.body);
    return res.status(200).json({
      message: "Color updated successfully",
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
    const data = await ProductColor.findByPk(req.params.id);
    if (!data) {
      throw new Error("Color not found!");
    }
    // Xóa Color
    await data.destroy();
    return res.status(200).json({
      message: "Color deleted successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
