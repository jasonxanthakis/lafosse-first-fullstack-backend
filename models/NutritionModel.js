const fruitsJSONData = require("../fruits.json");

class NutritionModel {
    constructor(fruit) {
        this.name = fruit.name
        this.calories = fruit.nutritions.calories
    }

    static showAllNutrition() {
        return fruitsJSONData.map(fruit => new NutritionModel(fruit))
    }

    static showNutrition(name) {
        const fruits = fruitsJSONData.filter(fruit =>
            fruit.name.toLowerCase().startsWith(name.toLowerCase())
        );

        if (fruits.length > 0) {
            return fruits.map(fruit => new NutritionModel(fruit));
        } else {
            throw "No fruits found starting with that name.";
        }
    }
}

module.exports = NutritionModel