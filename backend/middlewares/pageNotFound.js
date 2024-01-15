module.exports = (req, res, next) => {
    res.status(404);
    res.json({ code: 404, msg: "Page Not Found" });

    next();
};
