const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');


const app = express();

env.config();
// Routes
const authRoute = require('./routes/auth');
const landingPageRoute = require('./routes/landingPage');


app.set('PORT', process.env.PORT || 8000);


//connect to atlas 
mongoose.connect(process.env.DB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db'))



//Middlewares

app.use(express.json());

app.use('/user', authRoute);
app.use('/', landingPageRoute);


app.listen(app.get('PORT'), () => {
    console.log('server running at', app.get('PORT'))
})