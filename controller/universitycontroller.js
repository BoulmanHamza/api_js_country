const express = require("express");
const app = express();
const universityservice = require('../service/universityservice');
app.set("view engine","ejs");

app.get("/universities", (req, res) => {
    universityservice.getUniversity().then(response => {
        res.render("index",{universities: response.data})
    });
});

app.listen(2020, () => {
    console.log('serveur')
})