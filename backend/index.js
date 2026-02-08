import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors"
import useroute from "./route/user.route.js"
const app = express();

app.use(express.json())
app.use("/uploads", express.static("uploads"));
dotenv.config();

app.use(cors({
  origin: "https://bookstore-035k.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("MERN app project");
});

// routes
app.use("/book", bookRoute);
app.use("/user",useroute)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
