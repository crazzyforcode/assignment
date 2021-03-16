var mongoose = require("mongoose")

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    bio: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    profilePic: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
