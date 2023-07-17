const express = require("express");
const ejs = require("ejs");
const app = express;
app.set('view engine','ejs');

app.get('/',(req,res)=>{
app.render("content")
});

const port = 5500;
app.listen(port,(req,res)=>{
    console.log(`${port} da sistem çalışıyor`)
})