const express = require('express');
const fruitsApp = express();
const cors = require('cors');
const fruitsRoutes = require("./routes/fruitsRoutes")
const nutritionRoutes = require("./routes/nutritionRoutes")

fruitsApp.get('/', (req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "https://fruit-salad-builder.onrender.com/");
   res.send('Hello Fruity!')
})
fruitsApp.use(cors());
fruitsApp.use(express.json());
fruitsApp.use('/fruits', fruitsRoutes)
fruitsApp.use('/nutrition', nutritionRoutes)

module.exports = fruitsApp