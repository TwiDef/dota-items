const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    itemImage: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Item", itemSchema)