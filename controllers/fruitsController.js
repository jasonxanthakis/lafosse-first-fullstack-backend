const FruitModel = require("../models/FruitModel");

const showAllFruits = async (req, res) => {
    try {
        const fruits = await FruitModel.showAllFruits();
        res.status(200).send(fruits);
    } catch(err) {
        res.status(500).send({ error: "Server error" });
    }
}

const showFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();
	
    try {
        const fruit = await FruitModel.getFruit(name);
        res.header('Access-Control-Allow-Origin', 'https://fruit-salad-builder.onrender.com');
        res.status(200).send(fruit);
    } catch(err) {
	    res.status(404).send({error: err})
    }
}

const createFruit = async (req, res) => {
    try {
        const newFruit = await FruitModel.create(req.body);
        res.status(201).send(newFruit);
    } catch (err) {
        res.status(409).send({ error: err});
    }
};

const overwriteFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();
    const exists = await FruitModel.isFruit(name);

    try {
        // const overwrittenFruit = await FruitModel.overwrite(name, req.body);
        if (exists) {
            const fruit = await FruitModel.getFruit(name);
            const result = await fruit.destroy();
        }
        const replacedFruit = await FruitModel.create(req.body);

        res.status(202).send(replacedFruit);
    } catch (err) {
        res.status(400).send({ error: err })
    }
};

const updateFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try {
        const fruit = await FruitModel.getFruit(name);
        const result = await fruit.update(req.body);
        res.status(202).send(result);
    } catch (err) {
        res.status(404).send({ error: err });
    }
};

const destroyFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try {
      const fruit = await FruitModel.getFruit(name);
      const result = await fruit.destroy();

      res.sendStatus(204);
    } catch (err) {
      res.status(404).send({ error: err});
    }
};

module.exports = {showAllFruits, showFruit, createFruit, overwriteFruit, updateFruit, destroyFruit}