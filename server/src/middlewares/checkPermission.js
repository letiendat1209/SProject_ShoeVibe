import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

const { SECRET_KEY } = process.env;

export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error(
        "Authorization header is missing - Chưa đăng nhập , méo có accessToken-"
      );
    }

    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Token is missing");
    }
    // Xác thực token
    const decoded = jwt.verify(token, SECRET_KEY);

    const user = await User.findByPk(decoded.id); 
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "admin") {
      throw new Error(
        "Insufficient permissions - Méo phải admin , cook mày -"
      );
    }

    req.user = user; // Có thể hữu ích để truyền thông tin user cho các middleware tiếp theo
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(401).json({
      name: error.name,
      message: error.message,
    });
  }
};
