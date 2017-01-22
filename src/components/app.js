import Header from './header';
import Navigation from './navigation';

const style = {
  app: {
    minHeight: '100vh'
  }
};

export class App extends React.Component {
  render() {
    return (
      <div style={style.app}>
        <Header />
        {this.props.children}
        <Navigation {...this.props} />
      </div>
    );
  }
}
