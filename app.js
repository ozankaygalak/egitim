const express = require("express");
const ejs = require("ejs");
const app = express;
app.set('view engine','ejs');

app.get("get",(req,res)=>{
app.render("/views/partials/header")
});

const port = 5500;
app.listen(port,(req,res)=>{
    console.log(`${port} da sistem çalışıyor`)
})