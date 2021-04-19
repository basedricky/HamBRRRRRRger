
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const app = express();
const burger = require('../models/burger.js');


app.engine('exphbs', exphbs({ defaultLayout: 'main' }));
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

// post route

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