const axios = require('axios')
const universityApiBaseUrl = 'http://universities.hipolabs.com/search?country=morocco'

function getUniversity() {
    return axios.get(universityApiBaseUrl);
}

module.exports = { getUniversity }