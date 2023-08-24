const express = require("express");
const router = express.Router();
const { getItems, createItem, getItem } = require("../controllers/items");
const path = require("path");
const multer = require("multer");

// Show, where store downloaded files
const storage = multer.diskStorage({
    destination: "./assets/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// @route GET /api/items
// @des Get all items
router.get("/", getItems);

// @route GET /api/item/:id
// @des Get single item on id
router.get("/:id", getItem);

// @route POST /api/items
// @des Create single item
router.post("/", upload.single("itemImage"), createItem);

module.exports = router;