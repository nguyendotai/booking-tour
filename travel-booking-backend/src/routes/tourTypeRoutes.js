const express = require("express");
const { getAllTourTypes, createTourType } = require("../controllers/tourTypeController");
const {authMiddleware, adminMiddleware} = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllTourTypes);
router.post("/", authMiddleware, adminMiddleware, createTourType);

module.exports = router;