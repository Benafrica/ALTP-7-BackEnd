
import express from "express";
const authRouter = express.Router();

import authController from "../Controllers/authController";
import {verifyAccessToken} from "../helpers/jwt_helper";

// Creating Login Route


/**
 * @swagger
 * components:
 *      securitySchemes:
 *          bearerAuth:
 *              type: http
 *              scheme: bearer
 *              bearerFormat: JWT
 *      schemas:
 *          dbUsers:
 *              type: object
 *              required:
 *                  - id
 *                  - fName
 *                  - lName
 *                  - email
 *                  - password
 *              properties:
 *                  id:
 *                      type: string
 *                      description: Auto Generated User Id
 *                  fName:
 *                      type: string
 *                      description: First Name Of The User
 *                  lName:
 *                      type: string
 *                      description: Last Name Of The User
 *                  email:
 *                      type: string
 *                      description: User Email
 *                  password:
 *                      type: string
 *                      description: User Password
 *
 */

/**
 * @swagger
 * tags:
 *      name: Authentication & Authorization
 *      description: User Roles, User Authentication & Authorisation
 */

/**
 * @swagger
 * /v1/auth/register:
 *   post:
 *     summary: New User Registration
 *     tags: [Authentication & Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/dbUsers'
 *     responses:
 *       201:
 *         description: User Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/dbUsers'
 *       500:
 *         description: Server Error
 */
// Register Route
authRouter.post("/v1/auth/register", authController.register);

/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     summary: User Login
 *     tags: [Authentication & Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/dbUsers'
 *     responses:
 *       201:
 *         description: User Logged In
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/dbUsers'
 *       500:
 *         description: Server Error
 */
// login Route
authRouter.post("/v1/auth/login", authController.login);

/**
 * @swagger
 * /v1/auth/logout:
 *   delete:
 *     summary: Logout
 *     tags: [Authentication & Authorization]
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       201:
 *         description: User Logged Out Successfully
 *       400:
 *         description: Refresh Token Expired
 *       500:
 *         description: Server Error
 */

// Logout Route
authRouter.delete("/v1/auth/logout", verifyAccessToken, authController.logout);

// Exporting login.js Route

export default authRouter;
