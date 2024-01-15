module.exports = (err, req, res, next) => {
    const statusCode = res.statusCode || res.code || res.status || 500;

    res.status(statusCode);
    res.json({ code: statusCode, stack: err.stack });
};
