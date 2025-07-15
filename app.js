const express = require('express');
const fruitsApp = express();
const cors = require('cors');
const fruitsRoutes = require("./routes/fruitsRoutes")
const nutritionRoutes = require("./routes/nutritionRoutes")


fruitsApp.use(cors({origin: 'https://fruit-salad-builder.onrender.com'}));
fruitsApp.use(express.json());

fruitsApp.get('/', (req, res) => {
   res.send('Hello Fruity!')
})

// Add headers before the routes are defined
fruitsApp.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.append('Access-Control-Allow-Origin', 'https://fruit-salad-builder.onrender.com');

    // Request methods you wish to allow
    res.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.append('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

fruitsApp.use('/fruits', fruitsRoutes)
fruitsApp.use('/nutrition', nutritionRoutes)

module.exports = fruitsApp