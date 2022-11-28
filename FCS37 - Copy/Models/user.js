var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    phoneNumber:{
      type: Number,
      required: true
    },
    userinfo: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    salt: String,
    role: {
      type: String,
      default: "user",
      require: true
    },
    status:{
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
