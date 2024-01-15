// /api/v1/cars/
// /api/v1/films/
// /api/v1/users/

// CRUD

const carsController = require("../controllers/CarsController");
const validateBody = require("../middlewares/validateBody");
const validateID = require("../middlewares/validateID");
const carBodySchema = require("../schemas/carBodySchema");

const carsRouter = require("express").Router();

// додати машину
carsRouter.post("/cars", validateBody(carBodySchema), carsController.add);

// отримати всі машини
carsRouter.get("/cars", carsController.getAll);

// отримати одну машину
carsRouter.get("/cars/:id", validateID, carsController.getOne);

// обновити одну машину
carsRouter.patch("/cars/:id", validateID, carsController.update);

// удалити одну машину
carsRouter.delete("/cars/:id", validateID, carsController.remove);

module.exports = carsRouter;
