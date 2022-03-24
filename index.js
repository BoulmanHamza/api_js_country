const express = require("express");
const app = express();
const axios = require('axios')

app.get("/", (req, res) => {
    axios.get('http://universities.hipolabs.com/search?country=morocco')
        .then(response => {
            // handle success
            console.log(response)
            res.send(response.data)
        })
});
app.listen(2020, () => {
    console.log('serveur')
})