import Collection from "../models/Collection";

export const create = async (req, res) => {
  try {
    //Validate here

    const data = await Collection.create(req.body);
    if (!data) {
      throw new Error("Failed to create category!");
    }
    return res.status(200).json({
      message: "Category created successfully",
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
    const data = await Collection.findAll(req.body);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Get all collections successfully",
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
    const data = await Collection.findByPk(req.params.id);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Category created successfully",
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
    const data = await Collection.findByPk(req.params.id, { new: true });
    if (!data) {
      throw new Error("Category not found!");
    }
    // Cập nhật dữ liệu mới vào category
    await data.update(req.body);
    return res.status(200).json({
      message: "Category updated successfully",
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
    const data = await Collection.findByPk(req.params.id);
    if (!data) {
      throw new Error("Category not found!");
    }
    // Xóa collection
    await data.destroy();
    return res.status(200).json({
      message: "Collection deleted successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
