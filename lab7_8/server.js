const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/products");
const homeRoutes = require("./routes/home");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use(cors());
app.use(bodyParser.json());
app.use("/api", productRoutes);
app.use("/", homeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
