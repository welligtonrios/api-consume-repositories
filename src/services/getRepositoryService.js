const axios = require('axios').default;
const {config} = require('../config');

async function getRepositoryService() {

    const url = "https://api.github.com/orgs/takenet/repos?per_page=100&sort=created&direction=asc";
    const response = await axios.get(url);
    return response.data;
     
}

module.exports = {getRepositoryService}