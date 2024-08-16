import express from "express";
import bodyParser from "body-parser";

const app= express();
const port= 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let zer=0;
const data={
    num:[],
    title:[],
    text:[]
}

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/make",(req,res)=>{
    res.render("make.ejs");
});

app.get("/scripts",(req,res)=>{
    res.render("scripts.ejs",data);
});

app.post("/make/submit",(req,res)=>{
    data.title.push(req.body["title"]) ;
    data.text.push(req.body["story"]);
    data.num.push(zer);
    zer++;
    res.render("make.ejs");
});

app.post("/expand",(req,res)=>{
    let x = req.body["blogex"];
    let dtxt= data.text[x];
    let dtit=data.title[x];
    let data2 = {
        text2:dtxt,
        title2:dtit
    }
    res.render("expand.ejs",data2);
});

app.listen(port,()=>{
    console.log(`Server up at port ${port}`);
});
