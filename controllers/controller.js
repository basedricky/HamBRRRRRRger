
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

// post

router.post('/api/burgers', (req, res) => {

    burger.insertOne([req.body.name], (result) => {
        res.json(result);
    });
});

// put route

router.put('/api/burgers/:id', (req, res) => {

    const id = `${req.params.id}`;

    burger.updateOne(

        id,

        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;