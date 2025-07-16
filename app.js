const express = require('express');
const fruitsApp = express();
const cors = require('cors');
const fruitsRoutes = require("./routes/fruitsRoutes")
const nutritionRoutes = require("./routes/nutritionRoutes")

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'X-Requested-With'],
  credentials: false, // change to true if you want to allow cookies
};

fruitsApp.get('/', (req, res) => {
   res.send('Hello Fruity!')
})

/*
// Add headers before the routes are defined
fruitsApp.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.set('Access-Control-Allow-Origin', 'https://fruit-salad-builder.onrender.com');

    // Request methods you wish to allow
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.set('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});
*/

fruitsApp.use(cors(corsOptions));
fruitsApp.options('*', cors(corsOptions));

fruitsApp.use(express.json());

fruitsApp.use('/fruits', fruitsRoutes)
fruitsApp.use('/nutrition', nutritionRoutes)

module.exports = fruitsApp