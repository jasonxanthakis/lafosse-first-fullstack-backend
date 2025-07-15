const express = require('express');
const fruitsApp = express();
const fruitsRoutes = require("./routes/fruitsRoutes")
const nutritionRoutes = require("./routes/nutritionRoutes")

fruitsApp.get('/', (req, res) => {
   res.send('Hello Fruity!')
})
fruitsApp.use(express.json());
fruitsApp.use('/fruits', fruitsRoutes)
fruitsApp.use('/nutrition', nutritionRoutes)

module.exports = fruitsApp