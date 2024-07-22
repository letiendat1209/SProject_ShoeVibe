import Joi from "joi";

export const productValidator = Joi.object({
  name: Joi.string().required().min(6).max(255),
  des: Joi.string().required(),
  categoryId: Joi.number().required(),
  brand: Joi.string(),
  price: Joi.number().required(),
  discount_id: Joi.number().required(),
  quantity: Joi.number().required(),
});
