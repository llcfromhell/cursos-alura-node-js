var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/products', function(req,res){
    res.render("products/list");
});

var port = 3000
app.listen(port,function(){
    console.log("server running on port "+port);
});