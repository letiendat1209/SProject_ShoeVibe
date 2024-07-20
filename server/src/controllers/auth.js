import User from "../models/User";
import dotenv from "dotenv";
import { signUpValidator, signInValidator } from "../validations/auth";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const { SECRET_KEY } = process.env;

export const signUp = async (req, res) => {
  try {
    // Xác nhận dữ liệu đầu vào
    const { error } = signUpValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({ message: errors });
    }

    // Kiểm tra tài khoản tồn tại dựa trên username và telephone
    const usernameExist = await User.findOne({
      where: { username: req.body.username },
    });
    const emailExist = await User.findOne({
      where: { email: req.body.email },
    });
    if (usernameExist) {
      return res.status(400).json({ message: "Username already exists!" });
    }
    if (emailExist) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);

    // Tạo tài khoản
    const userAccount = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    if (!userAccount) {
      throw new Error("Failed to sign up!");
    }

    // Trả về thông tin tài khoản, không hiện mật khẩu
    userAccount.password = undefined;
    return res.status(200).json({
      message: "Successfully signed up!",
      data: userAccount,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    // Xác nhận dữ liệu đầu vào
    const { error } = signInValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({ message: errors });
    }

    // Kiểm tra tài khoản tồn tại dựa trên username và telephone
    const userExists = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userExists) {
      return res
        .status(400)
        .json({ message: "User không tồn tại, vui lòng đăng ký" });
    }
    // Mã hóa mật khẩu
    const isMath = await bcryptjs.compareSync(
      req.body.password,
      userExists.password
    );
    if (!isMath) {
      return res.status(400).json({ message: "Mật khẩu không đúng!" });
    }
    const accessToken = jwt.sign({ id: userExists.id }, SECRET_KEY, {
      expiresIn: "1d",
    });

    // Trả về thông tin tài khoản, không hiện mật khẩu
    userExists.password = undefined;
    return res.status(200).json({
      message: "Successfully signed up!",
      data: userExists,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
