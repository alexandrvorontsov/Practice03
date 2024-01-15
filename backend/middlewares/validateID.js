const { isValidObjectId } = require("mongoose");

module.exports = (req, res, next) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        res.status(400);
        throw new Error(`ID: ${id} is not valid`);
    }
    next();
};
