import Header from './header';
import Navigation from './navigation';
// import Start from './start';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Navigation {...this.props} />
      </div>
    );
  }
}
