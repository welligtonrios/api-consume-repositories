const {Router} = require('express');
const {getRepositoryController} = require('../controller/gitHub_controller/getRepositoryController')

const routes = Router();

routes.get('/', function (req, res) {
    res.send('Home page');
});

routes.get('/getRepository', getRepositoryController);


module.exports = { routes }
