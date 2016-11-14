import Root from './root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

injectTapEventPlugin();

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);
