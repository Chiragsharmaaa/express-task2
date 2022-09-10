const http = require('http');
const express = require('express');

const app = express(); 

app.use((req, res, next) => {
    console.log('In the middleware!')
    next() // allows the request to continue to the next middleware in line.
})
app.use((req, res, next) => {
    console.log('In the middleware!')
    // res.send('<h1>Hello</h1>')
    res.send({name:'Chirag'})
})



app.listen(3000);