const fruitsArray = require("../fruits.json");

class FruitsModel {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAllFruits() {
        return fruitsArray.map(q => new FruitsModel(q));
    }

    static showFruit(name) {
        const fruits = fruitsArray.filter(fruit =>
            fruit.name.toLowerCase().startsWith(name.toLowerCase())
        );

        if (fruits.length > 0) {
            return fruits.map(fruit => new FruitsModel(fruit));
        } else {
            throw "No fruits found starting with that name.";
        }
    }

    static getFruit(name) {
        const fruit = fruitsArray.find((fruit) => fruit.name.toLowerCase() === name);

        if (fruit) {
            return new FruitsModel(fruit);
        } else {
            throw "The fruit doesn't exist.";
        }
    }

    static isFruit(name) {
        return fruitsArray.find((fruit) => fruit.name.toLowerCase() === name);
    }

    /*
    static create(data) {
        const newFruit = data;
        console.log(newFruit)

        newFruit["id"] = fruitsArray.length + 1;

        fruitsArray.push(newFruit);

        return new FruitsModel(newFruit)
    };
    */

    static create(data) {
        const newFruit = data;
        const fruit = fruitsArray.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase());
  
        if (fruit) {
            throw "The fruit already exists.";
        } else {
            newFruit["id"] = fruitsArray.length + 1;
            fruitsArray.push(newFruit);
    
            return new FruitsModel(newFruit)
        }
    };

    update (data) {
        const updatedFruit = fruitsArray.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase());

        if (updatedFruit) {

            if (data.genus) {
                updatedFruit.genus = data.genus;
            }
            if (data.name) {
                updatedFruit.name = data.name;
            }
            if (data.id) {
                updatedFruit.id = data.id;
            }
            if (data.family) {
                updatedFruit.family = data.family;
            }
            if (data.order) {
                updatedFruit.order = data.order;
            }
            if (data.nutritions) {
                updatedFruit.nutritions = data.nutritions;
            }

            return new FruitsModel(updatedFruit);
        } else {
            throw "Fruit not found";
        }
    };

    destroy() {
        const deletedFruit = fruitsArray.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase());
        
        if (deletedFruit) {
          const index = fruitsArray.indexOf(deletedFruit);
          fruitsArray.splice(index, 1);
        } else {
          throw "Quote not found";
        }

        return;
    };
}

module.exports = FruitsModel;