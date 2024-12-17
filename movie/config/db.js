const mongoose = require("mongoose");
require("dotenv").config();
const DB=process.env.DB_URL
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = connectDB;
