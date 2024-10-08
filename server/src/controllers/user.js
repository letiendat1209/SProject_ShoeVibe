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
export const changePassword = async (req, res) => {
  const { userId, currentPassword, newPassword } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect current password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
