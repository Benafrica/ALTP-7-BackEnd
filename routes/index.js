import express from "express";
import authRouter from "../routes/auth.js";
// import adminRoute from "../routes/admin.js";
const indexRoute = express.Router();

indexRoute.get("/", (req, res) => {
  res.status(200).send("Welcome To My API");
});

indexRoute.use("/auth", authRouter);
// indexRoute.use("/admin", adminRoute);

export default indexRoute;
