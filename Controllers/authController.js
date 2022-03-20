// const createError = require("http-errors");
import createError from 'http-errors';
// const dbUser = require("../models/dbUsers");
import dbUser from '../models/dbUsers';
const {authSchema, loginSchema} = require("../helpers/validation_schema");
const {
  signAccessToken
} = require("../helpers/jwt_helper");

module.exports = {
  register: async (req, res, next) => {
    try {
      const userDetails = await authSchema.validateAsync(req.body);
      const doesExist = await dbUser.findOne({email: userDetails.email});
      if (doesExist)
        throw createError.Conflict(
          `${userDetails.email} Email Has Already Been Registered`
        );
      const newUser = new dbUser(userDetails);
      const savedUser = await newUser.save();
      const newUserId = savedUser.id;
      const accessToken = await signAccessToken(savedUser.id);
      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 3,
        path: "/",
        sameSite: "Lax",
      });
      res.status(201).send({accessToken, newUserId});
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      // Validating the http request
      const result = await loginSchema.validateAsync(req.body);
      const user = await dbUser.findOne({email: result.email});

      if (!user) throw createError.NotFound("User Not Registered");
      const isMatch = await user.isValidPassword(result.password);
      if (!isMatch)
        throw createError.Unauthorized("Invalid Username Or Password");
      const accessToken = await signAccessToken(user.id);
      res.cookie("accessToken", accessToken, {
        path: "/",
        sameSite: "Lax",
        maxAge: 1000 * 60 * 60 * 3,
      });
      res.status(200).send({accessToken});
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest("Invalid Email Or Password"));
      next(error);
    }
  },

  logout: async (req, res, next) => {
    try {
      res.cookie("accessToken", "", {maxAge: 1});
      res.status(201).json({message: "Logged Out Successfully"});
    } catch (error) {
      next(error);
    }
  },
};
