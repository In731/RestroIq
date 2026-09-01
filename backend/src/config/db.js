const mongoose = require("mongoose");
const dns = require("dns");

// Force Node.js to resolve MongoDB SRV records via Google & Cloudflare DNS
dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            `${process.env.MONGO_URL}`,
            {
                family: 4,
                serverSelectionTimeoutMS: 15000,
            }
        );

        console.log(
            "✅ MongoDB connected !! DB HOST:",
            connection.connection.host
        );
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
