const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Contact = require("./models/contacts.models")



mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud')
.then(() => console.log("database connected"))

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))


app.get('/',async(req,res) => { 
    const contacts = await Contact.find()
    
    res.render('home',{contacts})
})

app.get('/show-contact/:id',async(req,res) => {
    const contact = await Contact.findById( req.params.id)   
    res.render('show-contact',{ contact})
    })

app.get('/add-contact',(req,res) => { res.render('add-contact')})

app.post('/add-contact',async(req,res) => {
    const contact = await Contact.insertOne({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        address:req.body.address

    })
    res.redirect("/")

})

app.get('/update-contact/:id',async(req,res) => {
    const contact = await Contact.findById( req.params.id)   
    res.render('update-contact',{ contact})
    
})

app.post('/update-contact/:id',async (req,res) => {
    await Contact.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")
})


app.get('/delete-contact/:id',async(req,res) => {
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect("/")
})



app.listen(3000, () => {
    console.log("server started successfully on port 3000.")
})