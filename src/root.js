import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import withMaterialUI from './decorators/withMaterialUI';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';

import { App } from './components/app';
import Start from './components/start';
import Menu from './components/menu';
import Recipes from './components/recipes';
import { Login } from './components/login';

const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log('dispatching', action);// eslint-disable-line
    const result = next(action);

    console.log('next state', getState());// eslint-disable-line
    return result;
  };
};

let store = compose(applyMiddleware(thunkMiddleware, logger))(createStore)(appReducer);

@withMaterialUI
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={Start} />
            <Route path="menu" component={Menu} />
            <Route path="recipes" component={Recipes} />
            <Route path="cart" component={Start} />
            <Route path="graph" component={Start} />
          </Route>
          <Route path='/login' component={Login} />
        </Router>
      </Provider>
    );
  }
}
