const express = require("express");
const { getAllTours, createTour } = require("../controllers/tourController");
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllTours);
router.post("/", authMiddleware, adminMiddleware, createTour);

module.exports = router;