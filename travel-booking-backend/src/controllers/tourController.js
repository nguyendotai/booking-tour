const Tour = require("../models/Tour");
const TourTypes = require("../models/Category");

exports.getAllTours = async (req, res) => {
    const tours = await Tour.findAll({
        include: [{ model: TourTypes }],
    });
    res.json(tours);
};

exports.createTour = async (req, res) => {
  try {
    const { name, price, description, categoryId, startDate, endDate, duration, capacity } = req.body;

    // Kiểm tra categoryId có tồn tại
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({ error: "Category not found" });
    }

    const tour = await Tour.create({ name, price, description, categoryId, startDate, endDate, duration, capacity  });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
