import express from "express";
import authRoute from "../routes/auth";
import adminRoute from "../routes/admin.js";
const indexRoute = express.Router();

indexRoute.get("/", (req, res) => {
  res.status(200).send("Welcome To My API");
});

indexRoute.use("/auth", authRoute);
indexRoute.use("/admin", adminRoute);

export default indexRoute;
