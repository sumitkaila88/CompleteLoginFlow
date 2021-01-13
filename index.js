const express = require('express');




const app = express();
const port = 8080;


// Routes
const route = require('./routes/auth');


//Middlewares

app.use('/user', route);


app.listen(port, () => {
    console.log('server running at', port)
})