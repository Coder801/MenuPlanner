import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import withMaterialUI from './decorators/withMaterialUI';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import appReducer from './reducers';

import { App } from './components/app';
import Start from './components/start';
import Menu from './components/menu';
import Recipes from './components/recipes';
import RecipeDetails from './components/recipes/recipe-details';
import { Login } from './components/login';

let store = compose(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware(),
  routerMiddleware(browserHistory)
))(createStore)(appReducer);
const history = syncHistoryWithStore(browserHistory, store);

@withMaterialUI
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} >
            <IndexRoute component={Start} />
            <Route path="menu" component={Menu} />
            <Route path="recipes" component={Recipes} />
            <Route path="recipes/:recipeId" component={RecipeDetails} />
            <Route path="cart" component={Start} />
            <Route path="graph" component={Start} />
          </Route>
          <Route path='/login' component={Login} />
        </Router>
      </Provider>
    );
  }
}
