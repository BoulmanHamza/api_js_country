const express = require("express");
const app = express();
const universityservice = require('../service/universityservice');
app.set("view engine", "ejs");

app.get("/universities", (req, res) => {
    universityservice.getAllUniversity().then((response) => {
        res.render("index", { universities: response.data })
    }).catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        res.send("the request was made and there is an err in link api")
    });
});

app.listen(2020, () => {
    console.log('serveur')
})