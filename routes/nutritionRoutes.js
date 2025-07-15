const express = require("express");
const nutritionRouter = express.Router();
const nutrtionController = require("../controllers/nutritionController")

nutritionRouter.get("/", nutrtionController.showAllNutrition)
nutritionRouter.get("/:name", nutrtionController.showNutrition)

module.exports = nutritionRouter