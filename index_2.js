import express from 'express'
const app= express()



app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/About', (req, res)=>{
    var users = [
        {name:'vijay ', age:19,city:'delhi'},
        {name:'purvin ', age:20,city:'delhi'},
        {name:'dev ', age:190,city:'delhi'},
        {name:'romil ', age:199,city:'delhi'},
        {name:'dax ', age:0.19,city:'delhi'},

    ]
    res.render("about",{title:"About Page",message:"welcome to the about page!"})
})







app.listen(3000,()=>{
    console.log("server started successfully on port : ")
})