const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

//
//Custom Routes
const recipeRoutes = require('./recipeRoutes/recipe-routes');
const ingRoutes = require('./ingredientsRoutes/ingredients-routes');

//
//Initialize server
const server = express();

//
//setup middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('tiny'));

//
//Inital get for testing
server.get('/', (req, res) => {
    res.send('Server is running!');
});

//
//Route Handlers
server.use('/api/recipes', recipeRoutes);
server.use('/api/ings', ingRoutes);

//
//Error handler
server.use((err, req, res, next) => {
    res.status(400).json(err);
});

//
//Initialize PORT
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => `App is listening on PORT: ${PORT}`);
