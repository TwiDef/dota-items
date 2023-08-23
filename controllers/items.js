const Item = require("../models/item");

const getItems = async (req, res) => {
    try {
        const items = await Item.find();

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Can't get items, try again later." });
    }
};

createItem = async (req, res) => {
    try {
        const { name, price, description, rarity } = req.body;

        const item = await Item.create({
            name,
            price,
            description,
            rarity,
            itemImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
        });

        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: "Can't create item, try again later." });
    }
}

module.exports = {
    getItems,
    createItem
}