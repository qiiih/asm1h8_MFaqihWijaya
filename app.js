const express = require('express')
const ejs = require('ejs')
const config = require('./server-config.json')
const books = require('./books.json')

const app = express()

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

app.get('/books', (req, res) => {
    res.setHeader('Content-Type','text/html')
    res.render('bookList', {books})
})

app.listen(config.server.port, () => {
    console.log(`${config.server.name} running on port ${config.server.port}...`);
})