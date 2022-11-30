const express = require('express');
const cors = require('cors');
const listController = require('./controller/list.controller');
const ApiError = require('./api-error');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to to do list application.' });
});

app.route('/todoitem')
    .get(listController.findAll)
    .post(listController.create)
    .put(listController.update)
    .delete(listController.delete);

app.route('/todoitem/delete')
    .get(listController.findOne)
    .put(listController.update)
    .delete(listController.delete);

app.route('/1').get(listController.create)

// Handle 404 reponse.
app.use((req, res, next) => {
    // Handle for unkown route.
    // Call next() to pass to the error handling middleware.
    return next(new ApiError(404, 'Resource not found'));
});

// Define error-handling middleware last, after other app.use() and routes calls.
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error',
    });
});

module.exports = app;