import User from '../models/User'


export const create = async (req, res) => {
  try {
    //Validate here
    const data = await User.create(req.body);
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
export const getAllUsers = async (req, res) => {
  try {
    const data = await User.findAll(req.body);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Get all categories successfully",
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
    const data = await User.findByPk(req.params.id);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Get Detail User successfully",
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
    const data = await User.findByPk(req.params.id, { new: true });
    if (!data) {
      throw new Error("User not found!");
    }
    // Cập nhật dữ liệu mới vào User
    await data.update(req.body);
    return res.status(200).json({
      message: "User updated successfully",
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
    const data = await User.findByPk(req.params.id);
    if (!data) {
      throw new Error("Category not found!");
    }
    // Xóa category
    await data.destroy();
    return res.status(200).json({
      message: "Category deleted successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
