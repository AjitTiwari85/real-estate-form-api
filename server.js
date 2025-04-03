import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);

app.get("/", (req, res) => {
  res.send("Real Estate Form API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
