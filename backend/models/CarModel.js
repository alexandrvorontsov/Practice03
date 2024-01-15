const { model, Schema } = require("mongoose");

const carShema = new Schema({
    title: { type: String, required: [true, "DB: titlle is required"] },
    model: { type: String, required: [true, "DB: model is required"] },
    year: { type: Number, default: 2000 },
    color: { type: String, default: "white" },
});

module.exports = model("car", carShema);
