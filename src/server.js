const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const {routes} = require('./routes/routes')
const { enableCors } = require('./middlewares/cors');
const PORT = process.env.PORT || 3000;

function run_server() {

    const app = express();

    app.use(express.json());

    app.use(enableCors);

    app.use(routes);

    app.listen(PORT, () => {
        console.log(`Listening in port ${PORT}`);
    })
};

module.exports = { run_server };

