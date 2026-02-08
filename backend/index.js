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
  origin: [
    "https://bookstore-035k.onrender.com",
    "http://localhost:5173"
  ],
  credentials: true
}));

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// MongoDB connection
mongoose.connect(URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err.message);
  process.exit(1);
});



app.get("/", (req, res) => {
  res.send("MERN app project");
});

// routes
app.use("/book", bookRoute);
app.use("/user",useroute)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
