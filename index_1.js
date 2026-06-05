const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.get('/', (req, res) => {
    res.send({
        name: 'vijay',
        age: 19,
    })
})

app.set('view ')

app.get('/About', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/gallery', (req, res) => {
    res.send('<h1>gallery</h1>')
})

app.get('/user/:userid-:bookid', (req, res) => {
    res.send(req.params)
})

app.get('/search', (req, res) => {
    const name = req.query.name
    const age = req.query.age

    res.send(`search results - Name : ${name}, Age : ${age}`)
})

