const express = require("express");      //ejs ko import krne ki need nhi hoti because its        present inside express to express ko import krte hi ejs bhi aa jati hai
const app = express();
const path = require("path");
const PORT = 5000;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");   //boilerplate of ejs, code to connect ejs with express
//app.use("view",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.send("hello jii...");
});
// app.get("/app/:name",(req,res)=>{      //home.ejs ya sirf home bhi likh skte hai
//     const name = {name : "sujal saraswat", age : 21};
//     let {name} = req.params;
//     res.render("home.ejs",{name},{diceVal});  
// })
app.get("/app",(req,res)=>{
    let diceVal = Math.floor(Math.random()*7)+10;
    const names = ["sujal","harry","shraddha","kunal","aman"];
    res.render("home.ejs",{diceVal , names});
})
app.listen(PORT,()=>{
    console.log(`LISTENING AT...${PORT}`);
})