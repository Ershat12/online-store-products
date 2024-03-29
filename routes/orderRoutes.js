const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { createOrder } = require("../controllers/orderController");
const router = express.Router();

router.post("/", protect, createOrder);

module.exports = router;