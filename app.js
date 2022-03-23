import dotenv from "dotenv";
dotenv.config({path: ".env.development"});

// Importing Libaries

import mongoose from "mongoose";

import express from "express";

import morgan from "morgan";

import createError from "http-errors";

import swaggerUI from "swagger-ui-express";

import swaggerJsDoc from "swagger-jsdoc";

import cookieParser from "cookie-parser";

import cors from "cors";

// Importing Routes In The Server

import indexRoute from "./routes/index.js";
// API Swager Documentation

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Personal Portfolio API",
      version: "1.0.0",
      description:
        "This API Will Manage:\n 1. CRUD Operations For The Blog & Message Querries.\n 2. User Roles, User Authentication & Authorisation",
    },
    servers: [
      {url: `http://localhost:${process.env.PORT}`},
      {url: "https://benafrica-api.herokuapp.com"},
    ],
  },
  apis: ["./routes/*.js"],
};

const apiSpecs = swaggerJsDoc(options);

const app = express();
app.options("*", cors());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(morgan("dev"));
app.use(
  express.json()
); /* You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request */
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// MongoDB Atlas Connection

const connectDB = async () => {
  // API Mongo Atlas DB
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connecting & Listening to The Database

    app.listen(process.env.PORT, () => {
      console.log("Personal Portfolio App Has Started");
      app.emit("appStarted");
    });
    console.log("MongoDb Atlas Connected");
    console.log("Listening On Port: " + process.env.PORT);
  } catch (err) {
    console.error(err);
  }
};
connectDB();

// Using Swagger API Documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiSpecs));

// Using Routes
app.use("/", indexRoute);

export default app;
