
import express from "express"
import bodyparser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
const app=express()
const port=3000
let posts=[];
let i=0;
let j=0;

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{
        posts:posts
    })
   
})

app.post("/add-post", (req, res) => {
    let newpost={id:uuidv4(),content:req.body["post"]}
    posts.push(newpost)
    console.log(posts)
    res.redirect("/")
    
    
});
app.post("/delete-post",(req,res)=>{
    const postId=req.body["postId"]
    posts = posts.filter(post => post["id"] !== postId);
    res.redirect("/")
})
app.post("/update-post",(req,res)=>{
    const postId=req.body["postId"]
})
  
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

