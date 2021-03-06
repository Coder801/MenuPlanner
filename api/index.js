const bodyParser = require('body-parser');

const apiRouter = require('express').Router();
const dishesRouter = require('./dishes');
const recipesRouter = require('./recipes');

apiRouter.use(bodyParser.json());

apiRouter.use('/dishes', dishesRouter);
apiRouter.use('/recipes', recipesRouter);

module.exports = apiRouter;
