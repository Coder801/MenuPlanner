import { Provider } from 'react-redux'; //eslint-disable-line no-unused-vars
import { createStore, applyMiddleware, compose } from 'redux';
import { App } from './components/app'; //eslint-disable-line no-unused-vars
import appReducer from './reducers';

const logger = ({ getState }) => {
  return (next) => (action) => {
        console.log('dispatching', action);// eslint-disable-line
    const result = next(action);

        console.log('next state', getState());// eslint-disable-line
    return result;
  };
};

let store = compose(applyMiddleware(logger))(createStore)(appReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app')
);
