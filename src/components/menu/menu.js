import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    fetch('/api/menu')
      .then(response => response.json())
      .then(json => this.props.onMenuLoad(json.menu));
  }

  openMenuItem(id) {
    console.log(id); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Paper zDepth={3}>
          <List>
            {
              this.props.menu.map(menu => <ListItem key={menu.id} primaryText={menu.name} onClick={() => this.openMenuItem(menu.id)} />)
            }
          </List>
        </Paper>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: React.PropTypes.array.isRequired
};