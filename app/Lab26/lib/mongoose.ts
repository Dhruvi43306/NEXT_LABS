import mongoose from "mongoose";

export const connection = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    mongoose.connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("MongoDB Error:", err);
    });

    await mongoose.connect("mongodb://localhost:27017/Next_Demo");

  } catch (err) {
    console.log(err);
  }
};