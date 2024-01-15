const CarModel = require("../models/CarModel");
const asyncHandler = require("express-async-handler");

class CarsController {
    add = asyncHandler(async (req, res) => {
        // controller validation
        const { title, model } = req.body;
        if (!title || !model) {
            res.status(400);
            throw new Error("Please provite all required fields");
        }

        const car = await CarModel.create({ ...req.body });
        res.status(201).json({ code: 201, msg: "OK", data: car });
    });

    getAll = asyncHandler(async (req, res) => {
        const cars = await CarModel.find({});
        res.status(200).json({
            code: 200,
            msg: "OK",
            data: cars,
            qty: cars.length,
        });
    });

    // валідний існуючий
    // валідний не існуючий
    // не валідний

    getOne = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const car = await CarModel.findById(id);
        if (!car) {
            res.status(404);
            throw new Error(`Car with ID: ${id} is not found`);
        }
        res.status(200).json({ code: 200, msg: "OK", data: car });
    });

    update = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const car = await CarModel.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true, runValidators: true }
        );
        if (!car) {
            res.status(404);
            throw new Error(`Car with ID: ${id} is not found`);
        }
        res.status(200).json({ code: 200, msg: "OK", data: car });
    });

    remove = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const car = await CarModel.findByIdAndDelete(id);
        if (!car) {
            res.status(404);
            throw new Error(`Car with ID: ${id} is not found`);
        }
        res.status(200).json({ code: 200, msg: "OK", data: car });
    });
}

module.exports = new CarsController();
