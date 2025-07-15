const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruitsController")

fruitsRouter.get('/', fruitsController.showAllFruits)
fruitsRouter.get("/:name", fruitsController.showFruit)

fruitsRouter.post("/", fruitsController.createFruit)
fruitsRouter.put("/:name", fruitsController.overwriteFruit)
fruitsRouter.patch("/:name", fruitsController.updateFruit)

fruitsRouter.delete("/:name", fruitsController.destroyFruit)

module.exports = fruitsRouter
