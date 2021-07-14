const express = require('express');
const app = express();
const port =process.env.PORT || 3000;
const hbs = require('hbs')
const hostname = 'localhost';
const path=require('path');

// template path 
const temppath= path.join(__dirname,"../template/views");
// partials path 
const partpath=path.join(__dirname,"../template/patials");
// static path for public folder 
const spath=path.join(__dirname,"../public");


app.use(express.static(spath));

// hbs
app.set("view engine","hbs");
app.set('views',temppath);
hbs.registerPartials(partpath)

// here is rendering 

app.get("/",(req,res)=>{
    res.render('index.hbs');
})
app.get("/about",(req,res)=>{
    res.render('about.hbs');
})
app.get("*",(req,res)=>{
    res.render('index.hbs');
})
app.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
})