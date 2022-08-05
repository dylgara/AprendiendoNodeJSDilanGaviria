const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("HOla")
    res.end();
})

app.listen(7577)  
