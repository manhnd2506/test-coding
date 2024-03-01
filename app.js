const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require('./router/main.router');

const app = express();


app.listen(8080, () => {
    console.log('Server is started!')
});

mongoose.connect('mongodb://127.0.0.1:27017/Test')
.then(() => {console.log('Connect MongoDB successfully!')})
.catch(() => {console.log('Connect MongoDB failed!')});

app.use(mainRouter.mainRouter);

