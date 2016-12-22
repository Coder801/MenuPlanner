const bodyParser = require('body-parser');

const apiRouter = require('express').Router();
const menusRouter = require('./menus');
const recipesRouter = require('./recipes');

apiRouter.use(bodyParser.json());

apiRouter.use('/menus', menusRouter);
apiRouter.use('/recipes', recipesRouter);

module.exports = apiRouter;
