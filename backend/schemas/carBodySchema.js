// const carShema = new Schema({
//     title: { type: String, required: [true, "DB: titlle is required"] },
//     model: { type: String, required: [true, "DB: model is required"] },
//     year: { type: Number, default: 2000 },
//     color: { type: String, default: "white" },
// });

const Joi = require("joi");

const carBodySchema = Joi.object({
    title: Joi.string().required(),

    model: Joi.string().required(),

    year: Joi.number(),

    color: Joi.string(),
});

module.exports = carBodySchema;
