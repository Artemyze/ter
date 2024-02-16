const express = require('express'),
    app = express(),
    PORT= 3000

const root = require('./routes/routes')

app.set('view engine', 'pug')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', root)


app.listen(PORT, () => {
    console.log(`PORT = ${PORT}`)
})

