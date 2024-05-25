import express from "express";
import connectDB from "./db.js";
import cors from "cors";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import Authenticated from "./middlewares/authenticated.js";

const app = express();

app.listen(8000, () => {
  console.log("Your server is running at PORT 8000");
});

connectDB();
app.use(express.json());
app.use(cors());

app.get("/secret/", [Authenticated], (req, res) => {
  res.send({
    message: "Welcome to this private route",
  });
  S;
});

app.use("/user", userRouter);
app.use("/product", productRouter);
