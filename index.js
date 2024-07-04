
import express from "express"
import bodyparser from "body-parser";
const app=express()
const port=3000
let array=[];
let i=0;
let j=0;

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{
        prevmessage:array
    })
   
})

app.post("/", (req, res) => {
    array[i++]=req.body["content"]
    console.log(array)
    
    res.render("content.ejs",{
        contents:array
    })
    res.redirect('/');
    
    
});
  
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

