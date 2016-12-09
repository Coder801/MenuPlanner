import Root from './root';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);
