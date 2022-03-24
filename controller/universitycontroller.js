const express = require("express");
const app = express();
const universityservice = require('../service/universityservice');

app.get("/university", (req, res) => {
    universityservice.getUniversity().then(response => {
        res.send(response.data);
    });
});

app.listen(2020, () => {
    console.log('serveur')
})