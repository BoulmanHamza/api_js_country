const express = require("express");
const app = express();
const axios = require('axios')
const universityApiBaseUrl = 'http://universities.hipolabs.com/search'

function getAllUniversity() {
    return axios.get(universityApiBaseUrl);
}

module.exports = { getAllUniversity }