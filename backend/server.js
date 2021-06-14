const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// bring routes

const authRoutes = require('./routes/auth');

// app
const app = express();

// db
mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}) // Adding new mongo url parser
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors());
}

// routes middleware
app.use('/api', authRoutes);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
