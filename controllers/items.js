const Item = require("../models/item");
/** 
 * Get all items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const items = await Item.find();

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Can't get items, try again later." });
    };
};

const getItem = async (req, res) => {
    try {
        const item = await Item.find({ _id: req.params.id });

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ message: "Item not found" });
    };
};

/** 
 * Create item
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
createItem = async (req, res) => {
    const errors = {};

    /* validate newest item */
    if (!req.body.name) {
        errors.name = { message: "Please, set name" };
    };
    if (!req.body.price) {
        errors.price = { message: "Please, set price" };
    };
    if (!req.body.description) {
        errors.description = { message: "Please, set description" };
    };
    if (req.body.description && req.body.description.length > 700) {
        errors.description = { message: "Too long description" };
    };
    if (!req.body.rarity) {
        errors.rarity = { message: "Please, set rarity" };
    };
    if (req.body.rarity && req.body.rarity > 10) {
        errors.rarity = { message: "Rarity can't be greater than 10" };
    };
    if (!req.file) {
        errors.itemImage = { message: "Please, add item image" };
    };

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    };

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
    };
};

module.exports = {
    getItems,
    getItem,
    createItem
};