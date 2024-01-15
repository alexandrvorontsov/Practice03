const { model, Schema } = require("mongoose");

const userShema = new Schema({
    password: { type: String, required: [true, "DB: password is required"] },
    email: { type: String, required: [true, "DB: email is required"] },
    name: { type: String, default: "Jonny Depp" },
    token:{type: String, default: null},
    
});

module.exports = model("user", userShema);
