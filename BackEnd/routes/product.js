import express from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
  UpdateProduct,
  deleteProduct,
  rateProduct,
  createProductReview,
} from "../controllers/product.js";
import Authenticated from "../middlewares/authenticated.js";

const productRouter = express.Router();

//postproduct
//Get all products
//Get product
//UpDateproduct
//Deleteproduct

productRouter.post("/", Authenticated, createProduct);
productRouter.get("/", getAllProduct);
productRouter.get("/:id", getProduct);
productRouter.put("/:id", Authenticated, UpdateProduct);
productRouter.delete("/:id", Authenticated, deleteProduct);
productRouter.post("/rate/:id", Authenticated, rateProduct);
productRouter.post("/:id/reviews", Authenticated, createProductReview);

export default productRouter;
