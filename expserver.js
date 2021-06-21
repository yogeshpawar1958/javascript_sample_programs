const express =require("express");
const app =express();
 app.get("/",function(req,resp){
     resp.send("good morning yogesh pawar")
 })
 app.get("/about",function(req,resp){
    resp.send("this is about page")
})
app.post("/about",function(req,resp){
    resp.send("this is post about page")
})

app.get("/contact",function(req,resp){
    resp.send("this is contact page")
})

app.get("/calculator",function(req,resp){
    resp.sendFile(__dirname+ "/index.html")
})









app.listen(3000,function(req,resp){
    console.log("server is runnig st port 3000 ....")
});