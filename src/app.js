const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs')
const hostname = 'localhost';
const path=require('path');
const temppath= path.join(__dirname,"../template/views");
const partpath=path.join(__dirname,"../template/patials");
const spath=path.join(__dirname,"../public");
app.use(express.static(spath));
app.set("view engine","hbs");
app.set('views',temppath);
hbs.registerPartials(partpath)
app.get("/",(req,res)=>{
    res.render('index.hbs');
})
app.get("/about",(req,res)=>{
    res.render('about.hbs');
})

app.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
})