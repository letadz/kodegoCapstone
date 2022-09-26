const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Your name is required"],
      trim: true,
      text: true,
    },
    phone: {
      type: Number,
      required: [true, "Your phone number is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Your message is required"],
      trim: true,
      text: true,
    },
    rating: {
      type: Number,
      required: [true, "Your phone number is required"],
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
