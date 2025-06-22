const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const connectDB = require("./db/config");

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
