const bodyParser = require('body-parser');

const apiRouter = require('express').Router();
const dishesRouter = require('./dishes');
const recipesRouter = require('./recipes');
const cartRouter = require('./cart');

apiRouter.use(bodyParser.json());

apiRouter.use('/dishes', dishesRouter);
apiRouter.use('/recipes', recipesRouter);
apiRouter.use('/cart', cartRouter);

module.exports = apiRouter;
