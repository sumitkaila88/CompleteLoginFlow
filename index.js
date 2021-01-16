const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const env = require('dotenv');
const path = require('path');


const app = express();

env.config();
// Routes
const authRoute = require('./routes/auth');

app.set('PORT', process.env.PORT || 8000);


//connect to atlas 
mongoose.connect(process.env.DB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db'))



//Middlewares

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/user', authRoute);

app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));


app.listen(app.get('PORT'), () => {
    console.log('server running at', app.get('PORT'))
})