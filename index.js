var express = require('express');  
var app     = express(); 
 
app.get('/', function(req, res) {  
    var url = 'http://universities.hipolabs.com/search?country=morocco';

});

app.listen(2020, () =>{
    console.log('serveur')
})

