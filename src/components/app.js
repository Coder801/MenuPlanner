import Header from './header';
import Navigation from './navigation';
import Start from './start';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Start />
        <Navigation />
      </div>
    );
  }
}
