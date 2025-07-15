const express = require('express');
const fruitsApp = express();
const cors = require('cors');
const fruitsRoutes = require("./routes/fruitsRoutes")
const nutritionRoutes = require("./routes/nutritionRoutes")

fruitsApp.get('/', (req, res) => {
   res.send('Hello Fruity!')
})

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://fruit-salad-builder.onrender.com');

    // Pass to next layer of middleware
    next();
});

fruitsApp.use(cors());
fruitsApp.use(express.json());
fruitsApp.use('/fruits', fruitsRoutes)
fruitsApp.use('/nutrition', nutritionRoutes)

module.exports = fruitsApp