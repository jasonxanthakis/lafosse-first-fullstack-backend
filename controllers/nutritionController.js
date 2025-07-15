const Nutrition = require("../models/NutritionModel");

const showAllNutrition = async (req, res) => {
    try {
        const nutrition = await Nutrition.showAllNutrition();
        res.status(200).send(nutrition);
    } catch(err) {
        res.status(500).send({ error: "Server error" });
    }
}

const showNutrition = async (req, res) => {
    const name = req.params.name.toLowerCase();
	
    try {
        const nutrition = await Nutrition.showNutrition(name);
        res.status(200).send(nutrition);
    } catch(err) {
	    res.status(404).send({error: err})
    }
}

module.exports = {showAllNutrition, showNutrition}