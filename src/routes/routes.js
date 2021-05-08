const {Router} = require('express');

const routes = Router();

routes.get('/', function (req, res) {
    res.send('Home page');
});

module.exports = { routes }
