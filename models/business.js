const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    regNo: {
      type: String,
      trim: true,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
