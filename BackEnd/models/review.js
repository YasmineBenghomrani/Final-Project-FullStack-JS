import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "userId required"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Review", reviewSchema);
