require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models"); // chỉ dùng 1 sequelize duy nhất

// const authRoutes = require("./routes/authRoutes");
// const tourRoutes = require("./routes/tourRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");
// const tourTypeRoutes = require("./routes/tourTypeRoutes");

const app = express();  
app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/tours", tourRoutes);
// app.use("/api/bookings", bookingRoutes);
// app.use("/api/payments", paymentRoutes);
// app.use("/api/tour-types", tourTypeRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
    app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error("❌ Sync error:", err));
