const express = require('express');
const routes = require('./routes/userRoutes');
const db = require("./_db/server");

const bodyParser = require('body-parser');
const { json } = require('body-parser');


const app = express();


app.use[bodyParser.urlencoded({extended: true}), bodyParser.json()];
app.use(json());
app.use(express.json());


app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)


app.listen(8080, () => 
    console.log('Server is running on port 8080...'));

  