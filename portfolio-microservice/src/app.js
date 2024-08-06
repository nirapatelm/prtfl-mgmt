const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
var cors = require("cors");
dotenv.config();

const userRoutes = require("./routes/userRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const assetRoutes = require("./routes/assetRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/portfolios", portfolioRoutes);
app.use("/api/assets", assetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
