import { AppBar, FlatButton } from 'material-ui';
import { browserHistory } from 'react-router';

const style = {
  title: {
    cursor: 'pointer',
  },
};

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  onTitleClick() {
    browserHistory.push('/');
  }

  render() {
    return (
      <AppBar
        title="Menu Planner"
        style={style.title}
        onTitleTouchTap={this.onTitleClick}
        iconElementRight={<FlatButton label="Settings" onTouchTap={this.props.onSettingsClick} />}
      />
    );
  }
}
