const Category = require("../models/Category");

exports.getAllCategory = async (req, res) => {
    const category = await Category.findAll();
    res.json(category);
}

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}