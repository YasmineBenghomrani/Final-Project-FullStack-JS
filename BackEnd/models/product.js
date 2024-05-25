import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required"],
    },
    description: {
      type: String,
      required: [true, "description required"],
    },
    price: {
      type: Number,
      required: [true, "price required"],
      default: 0,
    },
    qte: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      enum: ["men", "woman", "kid"],
      required: [true, "category required"],

      //   type: String,
      //   enum: ["Fruits", "Vegetable", "Meet99s"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "userId required"],
    },
    picture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F9292244-default-avatar-icon-vector-of-social-media-user&psig=AOvVaw2MPmgbNF41Ri2ZTkHhWRi9&ust=1707575315390000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDDgvK7noQDFQAAAAAdAAAAABAE",
      required: [true, "Picture required"],
    },
    rate: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
