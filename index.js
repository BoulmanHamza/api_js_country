var fullUrl = 'http://universities.hipolabs.com/search?country=morocco';
var express = require('express');
var app = express();

app.get('/country', function(req, res) {
    app.use((req, res, next) => {
        const path = url.parse(req.url).path;
        console.log(path)
    });

});

// app.use((req, res, next) => {
//     const path = url.parse(req.url).path;
//     console.log(path)
// });

app.listen(2020, () => {
    console.log('serveur')
})