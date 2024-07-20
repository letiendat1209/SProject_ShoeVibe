import Joi from "joi";

// kiểm tra đăng kí
export const signUpValidator = Joi.object({
  username: Joi.string().required().min(6).max(30),
  // telephone: Joi.string()
  //   .pattern(/^[0-9]{10,11}$/)
  //   .required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(255),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
  role: Joi.string().optional(),
}).unknown(false);

export const signInValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(8).max(255),
});
