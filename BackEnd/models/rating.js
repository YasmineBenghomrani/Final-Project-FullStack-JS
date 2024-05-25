import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "userId required"],
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: [true, "productId required"],
    },
    rate: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Rating", ratingSchema);
