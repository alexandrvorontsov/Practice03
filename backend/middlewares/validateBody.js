module.exports = (carBodySchema) => {
    return (req, res, next) => {
        // console.log(carBodySchema);
        const { error } = carBodySchema.validate(req.body);
        if (error) {
            const message = `JOI: ${error.details[0].message}`;
            res.status(400);
            throw new Error(message);
        }
        next();
    };
};
