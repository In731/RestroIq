const express = require("express");
const cors = require("cors");

const productRoute = require("./routes/product.route.js");
const comboRoute = require("./routes/combo.route.js");
const orderRoute = require("./routes/order.route.js");

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",").map(o => o.trim())
    : true;

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to website",
        version: "1.0.0",
        status: true,
    });
});

// Routes
app.use("/api/product", productRoute);
app.use("/api/combo", comboRoute);
app.use("/api/order", orderRoute);

module.exports = app;