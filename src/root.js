import { Router, Route, browserHistory } from 'react-router';
import withMaterialUI from './decorators/withMaterialUI';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './reducers';

import { App } from './components/app';

const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log('dispatching', action);// eslint-disable-line
    const result = next(action);

    console.log('next state', getState());// eslint-disable-line
    return result;
  };
};

let store = compose(applyMiddleware(logger))(createStore)(appReducer);

@withMaterialUI
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App} />
        </Router>
      </Provider>
    );
  }
}
