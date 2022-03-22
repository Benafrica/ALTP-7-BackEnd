// const joi = require('@hapi/joi')
import joi from "@hapi/joi";

const authSchema = joi.object({
  fName: joi.string().min(3).required(),
  lName: joi.string().min(3).required(),
  email: joi.string().email().lowercase().required(),
  password: joi.string().min(5).max(30).required().label("Password"),
});

const loginSchema = joi.object({
  email: joi.string().email().lowercase().required(),
  password: joi.string().min(5).max(30).required(),
});
export default {authSchema, loginSchema};
