const axios = require('axios')
const universityApiBaseUrl = 'http://universities.hipolabs.com/search'

function getUniversity() {
    return axios.get(universityApiBaseUrl);
}

module.exports = { getUniversity }