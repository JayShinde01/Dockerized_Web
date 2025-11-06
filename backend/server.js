const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();  // loads .env locally, safe to keep

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/templates", require("./routes/templateRoutes"));
app.use("/api/analyzer", require("./routes/analyzerRoutes"));
app.use("/api/resume", require("./routes/fixRoutes"));
app.use("/api/resumes", require("./routes/resumeRoutes"));

app.get("/", (req, res) => res.send("API is running..."));
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
