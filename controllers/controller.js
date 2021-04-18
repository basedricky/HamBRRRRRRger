
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const app = express();
const burger = require('../models/burgers.js');


app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// get route

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const handlebarBurger = {
            burgers: data,
        };
        res.render('index', handlebarBurger);
    })
})

module.exports = router