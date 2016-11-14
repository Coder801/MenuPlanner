const bodyParser = require('body-parser');

const apiRouter = require('express').Router();
const menuRouter = require('./menu');
const recipesRouter = require('./recipes');

apiRouter.use(bodyParser.json());

apiRouter.use('/menu', menuRouter);
apiRouter.use('/recipes', recipesRouter);

module.exports = apiRouter;
