const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./db');

const users = require('./routes'); 
const fileRoute = require('./file');

mongoose.connect(config.DB, { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use('/file', fileRoute)
app.use('/all_student', users);

app.get('/', function(req, res, next) {
    res.send('hello mothfucker');
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

