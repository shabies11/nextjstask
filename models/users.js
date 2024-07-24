const { Schema, default: mongoose } = require("mongoose");

let user_schema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});
export const user =
  mongoose.models.users || mongoose.model("users", user_schema);
